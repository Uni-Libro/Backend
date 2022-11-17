import DB from '@databases';
import { CreateAuthorDto } from '@dtos/authors.dto';
import { HttpException } from '@exceptions/HttpException';
import { Author } from '@interfaces/author.interface';
import { isEmpty } from '@utils/util';

class AuthorService {
  public authors = DB.Author;

  public async findAllAuthor(): Promise<Author[]> {
    return this.authors.findAll();
  }

  public async findAuthorById(authorId: number): Promise<Author> {
    const findBook: Author = await this.authors.findOne({ where: { id: authorId } });
    if (!findBook) throw new HttpException(404, "The book you're looking for doesn't exist");

    return findBook;
  }

  public async createAuthor(authorData: CreateAuthorDto): Promise<Author> {
    if (isEmpty(authorData)) throw new HttpException(400, 'The author should have data');

    return this.authors.create({ ...authorData });
  }

  public async updateAuthor(authorId: number, authorData: CreateAuthorDto): Promise<Author> {
    if (isEmpty(authorData)) throw new HttpException(400, 'The author should have data');

    const findBook: Author = await this.authors.findOne({ where: { id: authorId } });
    if (!findBook) throw new HttpException(404, "The author you're looking for doesn't exist");

    await this.authors.update({ ...authorData }, { where: { id: authorId } });

    return findBook;
  }

  public async deleteAuthor(authorId: number): Promise<Author> {
    const findBook: Author = await this.authors.findOne({ where: { id: authorId } });
    if (!findBook) throw new HttpException(404, "The author you're looking for doesn't exist");

    await this.authors.destroy({ where: { id: authorId } });

    return findBook;
  }
}

export default AuthorService;