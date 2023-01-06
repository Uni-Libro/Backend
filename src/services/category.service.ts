import { PAGE_SIZE } from '@/config';
import { Pagination } from '@/interfaces/API.interface';
import DB from '@databases';
import { CreateCategoryDto } from '@dtos/category.dto';
import { HttpException } from '@exceptions/HttpException';
import { Category } from '@interfaces/category.interface';
import { isEmpty } from '@utils/util';

class CategoryService {
  public categories = DB.Category;

  public async findAllCategory({ limit, page }: Pagination): Promise<{ rows: Category[]; count: number }> {
    return this.categories.findAndCountAll({
      limit: limit ? Number(limit) : undefined,
      offset: page ? page * PAGE_SIZE : undefined,
    });
  }

  public async findCategoryById(categoryId: number): Promise<Category> {
    const findCategory: Category = await this.categories.findOne({ where: { id: categoryId } });
    if (!findCategory) throw new HttpException(404, "The category you're looking for doesn't exist");

    return findCategory;
  }

  public async createCategory(categoryData: CreateCategoryDto): Promise<Category> {
    if (isEmpty(categoryData)) throw new HttpException(400, 'The category should have data');

    return this.categories.create({ ...categoryData });
  }

  public async updateCategory(categoryId: number, categoryData: CreateCategoryDto): Promise<Category> {
    if (isEmpty(categoryData)) throw new HttpException(400, 'The category should have data');

    const findCategory: Category = await this.categories.findOne({ where: { id: categoryId } });
    if (!findCategory) throw new HttpException(404, "The category you're looking for doesn't exist");

    await this.categories.update({ ...categoryData }, { where: { id: categoryId } });

    return findCategory;
  }

  public async deleteCategory(categoryId: number): Promise<Category> {
    const findCategory: Category = await this.categories.findOne({ where: { id: categoryId } });
    if (!findCategory) throw new HttpException(404, "The category you're looking for doesn't exist");

    await this.categories.destroy({ where: { id: categoryId } });

    return findCategory;
  }
}

export default CategoryService;
