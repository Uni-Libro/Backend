import { HttpException } from '@/exceptions/HttpException';
import { Book } from '@/interfaces/books.interface';
import DB, { Relations } from '@databases';

class BookUserService {
  public bookmark = Relations.BookMark;
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

  public async getBookmarks(userId: number): Promise<Book[]> {
    const bookIds = await this.bookmark.findAll({ where: { UserModelId: userId }, attributes: ['BookModelId'] });
    // @ts-expect-error TODO: sequelize bug with property form
    const books = await this.books.findAll({ where: { id: bookIds.map(b => b.BookModelId) }, include: [{ model: DB.Author }] });
    return books;
  }
}

export default BookUserService;
