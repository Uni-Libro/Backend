import { PAGE_SIZE } from '@/config';
import { Pagination } from '@/interfaces/API.interface';
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

  public async findAllBook({ limit, page }: Pagination): Promise<Book[]> {
    return this.books.findAll({
      include: [{ model: this.categories }, { model: this.authors }],
      attributes: ['id', 'name', 'imageUrl', 'description', 'price'],
      limit,
      offset: page ? page * PAGE_SIZE : undefined,
    });
  }

  public async findBookByCategory(categoryId: number, { limit, page }: Pagination): Promise<Book[]> {
    return this.books.findAll({
      include: [
        {
          model: this.categories,
          where: { id: categoryId },
        },
        { model: this.authors },
      ],
      attributes: ['id', 'name', 'imageUrl', 'description', 'price'],
      limit,
      offset: page ? page * PAGE_SIZE : undefined,
    });
  }

  public async findBookById(bookId: number): Promise<Book> {
    const findBook = await this.books.findOne({
      where: { id: bookId },
      include: [{ model: this.categories }, { model: this.authors }],
    });
    if (!findBook) throw new HttpException(404, "The book you're looking for doesn't exist");
    return findBook.toJSON();
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

  public async searchBooks(query: string): Promise<Array<Book>> {
    const [book, authorBooks] = await Promise.all([
      this.books.findAll({
        where: { name: { [DB.Sequelize.Op.like]: `%${query}%` } },
        include: [{ model: DB.Author }, { model: DB.Category }],
      }),
      this.authors
        .findAll({
          where: { name: { [DB.Sequelize.Op.like]: `%${query}%` } },
        })
        .then(authors =>
          this.books.findAll({
            include: [{ model: DB.Author, where: { id: { [DB.Sequelize.Op.in]: authors.map(author => author.id) } } }, { model: DB.Category }],
          }),
        ),
    ]);

    return [...book, ...authorBooks];
  }
}

export default BookService;
