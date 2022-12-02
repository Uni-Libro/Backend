import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import BookController from '@/controllers/book.controller';
import { CreateBookDto } from '@/dtos/book.dto';
import validationMiddleware from '@/middlewares/validation.middleware';
import authMiddleware from '@/middlewares/auth.middleware';

class BookRoute implements Routes {
  public path = '/books';
  public router = Router();
  public bookController = new BookController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.bookController.getBooks);
    this.router.get(`${this.path}/:id(\\d+)`, authMiddleware, this.bookController.getBookById);
    this.router.post(`${this.path}`, validationMiddleware(CreateBookDto, 'body'), this.bookController.createBook);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateBookDto, 'body', true), this.bookController.updateBook);
    this.router.delete(`${this.path}/:id(\\d+)`, this.bookController.deleteBook);
  }
}

export default BookRoute;
