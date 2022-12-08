import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import CartController from '@/controllers/cart.controller';
import { AddToCartDto } from '@/dtos/book.dto';
import validationMiddleware from '@/middlewares/validation.middleware';
import authMiddleware from '@/middlewares/auth.middleware';

class CartRoute implements Routes {
  public path = '/cart';
  public router = Router();
  public bookController = new CartController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.bookController.getCart);
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(AddToCartDto, 'body'), this.bookController.addToCart);
    this.router.delete(`${this.path}`, authMiddleware, this.bookController.removeFromCart);
  }
}

export default CartRoute;
