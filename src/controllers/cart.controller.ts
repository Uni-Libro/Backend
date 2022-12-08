import CartService from '@/services/cart.service';

class CartController {
  public cartService = new CartService();

  public addToCart = async (req, res, next) => {
    try {
      const { bookId } = req.body;
      const { id: userId } = req.user;
      await this.cartService.addToCart(Number(bookId), userId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  };

  public removeFromCart = async (req, res, next) => {
    try {
      const { bookId } = req.body;
      const { id: userId } = req.user;
      await this.cartService.removeFromCart(Number(bookId), userId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  };

  public getCart = async (req, res, next) => {
    try {
      const { id: userId } = req.user;
      const cart = await this.cartService.getCart(userId);
      res.status(200).json({ data: cart, message: 'cart' });
    } catch (error) {
      next(error);
    }
  };
}

export default CartController;
