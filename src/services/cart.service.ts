import DB, { Relations } from '@/databases';
import { HttpException } from '@/exceptions/HttpException';
import { Book } from '@/interfaces/books.interface';

class CartService {
  public cart = Relations.Cart;
  public books = DB.Books;
  public users = DB.Users;

  public async addToCart(bookId: number, userId: number): Promise<void> {
    if (!bookId || !userId) throw new HttpException(400, 'Invalid data');
    const book = await this.books.findByPk(bookId);
    if (!book) throw new HttpException(404, 'Book not found');
    await this.cart.create({ BookModelId: 1, UserModelId: userId });
    return;
  }

  public async removeFromCart(bookId: number, userId: number): Promise<void> {
    await this.cart.destroy({ where: { BookModelId: bookId, UserModelId: userId } });
    return;
  }

  public async getCart(userId: number): Promise<{ books: Book[]; totalPrice: number }> {
    const bookIds = await this.cart.findAll({ where: { UserModelId: userId }, attributes: ['BookModelId'] });
    const books = await this.books.findAll({
      // @ts-expect-error TODO: sequelize bug with property form
      where: { id: bookIds.map(b => b.BookModelId) },
      include: [{ model: DB.Author }, { model: DB.Category }],
    });
    const totalPrice = books.reduce((acc, book) => acc + book.price, 0);
    return { books, totalPrice };
  }
}

export default CartService;
