import { NextFunction, Request, Response } from 'express';
import booksService from '@services/book.service';
import { Book } from '@/interfaces/books.interface';
import { CreateBookDto } from '@/dtos/book.dto';
import BookUserService from '@/services/books-user.service';
import { RequestWithUser } from '@/interfaces/auth.interface';
import CartService from '@/services/cart.service';

class BookController {
  public booksService = new booksService();
  public bookUserService = new BookUserService();
  public cartService = new CartService();

  public getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { limit, offset, category } = req.query;

      const findAllBooksData: Book[] = category
        ? await this.booksService.findBookByCategory(Number(category), {
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
          })
        : await this.booksService.findAllBook({
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
          });

      res.status(200).json({ data: findAllBooksData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getBookById = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const bookId = Number(req.params.id);
      const [findOneBookData, isBuyed, isInCart] = await Promise.all([
        this.booksService.findBookById(bookId),
        this.bookUserService.hasBook(bookId, req.user.id),
        this.cartService.hasBook(bookId, req.user.id),
      ]);
      res.status(200).json({ data: { ...findOneBookData, isBuyed, isInCart }, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateBookDto = req.body;
      const createBookData: Book = await this.booksService.createBook(userData);

      res.status(201).json({ data: createBookData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      const userData: CreateBookDto = req.body;
      const updateBookData: Book = await this.booksService.updateBook(userId, userData);

      res.status(200).json({ data: updateBookData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      const deleteBookData: Book = await this.booksService.deleteBook(userId);

      res.status(200).json({ data: deleteBookData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default BookController;
