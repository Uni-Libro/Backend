import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import BookUserController from '@/controllers/book-user.controller';
import { CreateBookMarkDto } from '@/dtos/book.dto';
import validationMiddleware from '@/middlewares/validation.middleware';
import authMiddleware from '@/middlewares/auth.middleware';

class BookUser implements Routes {
  public path = '/';
  public router = Router();
  public bookController = new BookUserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/bookmarks`, authMiddleware, this.bookController.getBookmarks);
    this.router.post(`/bookmarks`, validationMiddleware(CreateBookMarkDto, 'body'), this.bookController.addBookmark);
    this.router.delete(`/bookmarks`, authMiddleware, this.bookController.removeBookmark);
  }
}

export default BookUser;
