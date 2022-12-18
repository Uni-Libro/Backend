import { HttpException } from '@/exceptions/HttpException';
import { Pagination } from '@/interfaces/API.interface';
import { Book } from '@/interfaces/books.interface';
import DB, { Relations } from '@databases';

class BookUserService {
  public bookmark = Relations.BookMark;
  public userBooks = Relations.UserBooks;
  public books = DB.Books;
  public users = DB.Users;

  public async bookmarkBook(bookId: number, userId: number): Promise<void> {
    if (!bookId || !userId) throw new HttpException(400, 'Invalid data');
    const book = await this.books.findByPk(bookId);
    if (!book) throw new HttpException(404, 'Book not found');
    await this.bookmark.create({ BookModelId: bookId, UserModelId: userId });
    return;
  }

  public async removeBookmark(bookId: number, userId: number): Promise<void> {
    await this.bookmark.destroy({ where: { BookModelId: bookId, UserModelId: userId } });
    return;
  }

  public async getBookmarks(userId: number, { limit, offset }: Pagination): Promise<Book[]> {
    const bookIds = await this.bookmark.findAll({ where: { UserModelId: userId }, attributes: ['BookModelId'] });
    const books = await this.books.findAll({
      // @ts-expect-error TODO: sequelize bug with property form
      where: { id: bookIds.map(b => b.BookModelId) },
      include: [{ model: DB.Author }, { model: DB.Category }],
      limit,
      offset,
    });
    return books;
  }

  public async getUserBooks(userId: number, { limit, offset }: Pagination): Promise<Book[]> {
    const bookIds = await this.userBooks.findAll({ where: { UserModelId: userId }, attributes: ['BookModelId'] });
    const books = await this.books.findAll({
      // @ts-expect-error TODO: sequelize bug with property form
      where: { id: bookIds.map(b => b.BookModelId) },
      include: [{ model: DB.Author }, { model: DB.Category }],
      limit,
      offset,
    });
    return books;
  }

  public async hasBook(bookId: number, userId: number): Promise<boolean> {
    const book = await this.userBooks.findOne({ where: { BookModelId: bookId, UserModelId: userId } });
    return Boolean(book);
  }
}

export default BookUserService;
