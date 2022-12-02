import { NextFunction, Request, Response } from 'express';
import booksService from '@services/book.service';
import { Book } from '@/interfaces/books.interface';
import { CreateBookDto } from '@/dtos/book.dto';

class BookController {
  public booksService = new booksService();

  public getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllBooksData: Book[] = await this.booksService.findAllBook();

      res.status(200).json({ data: findAllBooksData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookId = Number(req.params.id);
      const findOneBookData: Book = await this.booksService.findBookById(bookId);

      res.status(200).json({ data: findOneBookData, message: 'findOne' });
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
