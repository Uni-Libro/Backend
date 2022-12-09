import CartService from '@/services/cart.service';
import VoucherService from '@/services/voucher.service';

class CartController {
  public cartService = new CartService();
  public voucherService = new VoucherService();

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

  public applyVoucher = async (req, res, next) => {
    try {
      const { id: userId } = req.user;
      const { voucherCode } = req.body;
      const cart = await this.cartService.getCart(userId);
      const discount = voucherCode ? await this.voucherService.calculateDiscount(voucherCode, cart.totalPrice) : 0;
      res.status(200).json({
        data: { ...cart, discount, finalPrice: cart.totalPrice - discount },
        message: 'cart',
      });
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
