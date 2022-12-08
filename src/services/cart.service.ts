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
    console.log(bookId, userId);
    await this.cart.create({ BookModelId: 1, UserModelId: userId });
    return;
  }

  public async removeFromCart(bookId: number, userId: number): Promise<void> {
    await this.cart.destroy({ where: { BookModelId: bookId, UserModelId: userId } });
    return;
  }

  public getCart(userId: number): Promise<Book[]> {
    return this.users.findAll({ where: { id: userId }, include: [{ model: this.books }], attributes: ['id'] }) as unknown as Promise<Book[]>;
  }
}

export default CartService;
