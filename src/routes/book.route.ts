import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import BookController from '@/controllers/book.controller';

class BookRoute implements Routes {
  public path = '/books';
  public router = Router();
  public bookController = new BookController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}books`, this.bookController.getBooks);
    this.router.get(`${this.path}books/:id`, this.bookController.getBookById);
    this.router.post(`${this.path}books`, this.bookController.createBook);
    this.router.put(`${this.path}books/:id`, this.bookController.updateBook);
    this.router.delete(`${this.path}books/:id`, this.bookController.deleteBook);
  }
}

export default BookRoute;
