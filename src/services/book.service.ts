import { logger } from '@/utils/logger';
import DB, { Relations } from '@databases';
import { CreateBookDto } from '@dtos/book.dto';
import { HttpException } from '@exceptions/HttpException';
import { Book } from '@interfaces/books.interface';
import { isEmpty } from '@utils/util';

class BookService {
  public books = DB.Books;
  public bookCategory = Relations.BookCategory;
  public bookAuthor = Relations.BookAuthor;
  public categories = DB.Category;
  public authors = DB.Author;

  public async findAllBook(): Promise<Book[]> {
    return this.books.findAll({
      include: [{ model: this.categories }, { model: this.authors }],
    });
  }

  public async findBookById(bookId: number): Promise<Book> {
    const findBook = await this.books.findOne({
      where: { id: bookId },
      include: [{ model: this.categories }, { model: this.authors }],
    });
    if (!findBook) throw new HttpException(404, "The book you're looking for doesn't exist");
    return findBook;
  }

  public async createBook(bookData: CreateBookDto): Promise<Book> {
    if (isEmpty(bookData)) throw new HttpException(400, 'The book should have name, authorName, imageUrl, description, price and category');

    const findBook: Book = await this.books.findOne({ where: { name: bookData.name } });
    if (findBook) throw new HttpException(409, `You're book ${bookData.name} already exists`);
    const { category, authors } = bookData;
    if (category.length === 0) throw new HttpException(400, 'The book should have at least one category');
    if (authors.length === 0) throw new HttpException(400, 'The book should have at least one author');
    const [categoriesMapping, authorsMapping] = await Promise.all([
      this.categories.findAll({ where: { id: { $in: category } } }),
      this.authors.findAll({ where: { id: { $in: authors } } }),
    ]);
    logger.debug(categoriesMapping);
    logger.debug(authorsMapping);
    const book = await this.books.create({ ...bookData });
    const relations = await Promise.all([
      this.bookCategory.bulkCreate(category.map(id => ({ bookId: book.id, categoryId: id }))),
      this.bookAuthor.bulkCreate(authors.map(id => ({ bookId: book.id, authorId: id }))),
    ]);
    logger.debug(relations);
    return book;
  }

  public async updateBook(bookId: number, bookData: CreateBookDto): Promise<Book> {
    if (isEmpty(bookData)) throw new HttpException(400, 'The book should have name, authorName, imageUrl, description, price and category');

    const findBook: Book = await this.books.findOne({ where: { id: bookId } });
    if (!findBook) throw new HttpException(404, "The book you're looking for doesn't exist");

    await this.books.update({ ...bookData }, { where: { id: bookId } });

    return findBook;
  }

  public async deleteBook(bookId: number): Promise<Book> {
    const findBook: Book = await this.books.findOne({ where: { id: bookId } });
    if (!findBook) throw new HttpException(404, "The book you're looking for doesn't exist");

    await this.books.destroy({ where: { id: bookId } });

    return findBook;
  }
}

export default BookService;
