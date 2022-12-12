import DB, { Relations } from '@/databases';
import { HttpException } from '@/exceptions/HttpException';
import { Cart } from '@/interfaces/books.interface';

class CartService {
  public cart = Relations.Cart;
  public userBooks = Relations.UserBooks;
  public books = DB.Books;
  public users = DB.Users;

  public async addToCart(bookId: number, userId: number): Promise<void> {
    if (!bookId || !userId) throw new HttpException(400, 'Invalid data');
    const book = await this.books.findByPk(bookId);
    if (!book) throw new HttpException(404, 'Book not found');
    const userBooks = await this.userBooks.findOne({ where: { BookModelId: bookId, UserModelId: userId } });
    if (userBooks) throw new HttpException(400, 'Book already in user books');
    await this.cart.create({ BookModelId: bookId, UserModelId: userId });
    return;
  }

  public async removeFromCart(bookId: number, userId: number): Promise<void> {
    await this.cart.destroy({ where: { BookModelId: bookId, UserModelId: userId } });
    return;
  }

  public async addCartToUserBooks(userId: number, cart: Cart): Promise<Cart> {
    const bookIds = cart.books.map(b => b.id);
    await Promise.all([
      this.cart.destroy({ where: { BookModelId: bookIds, UserModelId: userId } }),
      this.userBooks.bulkCreate(bookIds.map(b => ({ BookModelId: b, UserModelId: userId }))),
    ]);
    return cart;
  }

  public async getCart(userId: number): Promise<Cart> {
    const bookIds = await this.cart.findAll({ where: { UserModelId: userId }, attributes: ['BookModelId'] });
    const books = await this.books.findAll({
      // @ts-expect-error TODO: sequelize bug with property form
      where: { id: bookIds.map(b => b.BookModelId) },
      include: [{ model: DB.Author }, { model: DB.Category }],
    });
    const totalPrice = books.reduce((acc, book) => acc + book.price, 0);
    return { books, totalPrice };
  }

  public async handleIPG(userId: number, finalPrice: number, cart: Cart): Promise<Cart> {
    if (finalPrice > 0) {
      throw new HttpException(501, "IPG isn't implemented yet");
    }
    return this.addCartToUserBooks(userId, cart);
  }
}

export default CartService;
