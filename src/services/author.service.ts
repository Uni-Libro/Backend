import { PAGE_SIZE } from '@/config';
import { Pagination } from '@/interfaces/API.interface';
import { Book } from '@/interfaces/books.interface';
import DB, { Relations } from '@databases';
import { CreateAuthorDto } from '@dtos/authors.dto';
import { HttpException } from '@exceptions/HttpException';
import { Author } from '@interfaces/author.interface';
import { isEmpty } from '@utils/util';

class AuthorService {
  public authors = DB.Author;
  public books = DB.Books;

  public async findAllAuthor({ limit, page }: Pagination): Promise<{ rows: Author[]; count: number }> {
    return this.authors.findAndCountAll({
      limit,
      offset: page ? page * PAGE_SIZE : undefined,
    });
  }

  public async findAuthorById(authorId: number): Promise<Author & { books: Book[] }> {
    const findedAuthor: Author = (await this.authors.findByPk(authorId)).toJSON();
    if (!findedAuthor) throw new HttpException(404, "The author you're looking for doesn't exist");
    const books = await this.books.findAll({
      include: [{ model: DB.Author, where: { id: authorId } }, { model: DB.Category }],
    });
    return { ...findedAuthor, books };
  }

  public async createAuthor(authorData: CreateAuthorDto): Promise<Author> {
    if (isEmpty(authorData)) throw new HttpException(400, 'The author should have data');

    return this.authors.create({ ...authorData });
  }

  public async updateAuthor(authorId: number, authorData: CreateAuthorDto): Promise<Author> {
    if (isEmpty(authorData)) throw new HttpException(400, 'The author should have data');

    const findedAuthor: Author = await this.authors.findOne({ where: { id: authorId } });
    if (!findedAuthor) throw new HttpException(404, "The author you're looking for doesn't exist");

    await this.authors.update({ ...authorData }, { where: { id: authorId } });

    return { ...findedAuthor, ...authorData };
  }

  public async deleteAuthor(authorId: number): Promise<Author> {
    const findedAuthor: Author = await this.authors.findOne({ where: { id: authorId } });
    if (!findedAuthor) throw new HttpException(404, "The author you're looking for doesn't exist");

    await this.authors.destroy({ where: { id: authorId } });

    return findedAuthor;
  }
}

export default AuthorService;
