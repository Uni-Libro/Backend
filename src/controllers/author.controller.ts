import { NextFunction, Request, Response } from 'express';
import authorService from '@services/author.service';
import { Author } from '@/interfaces/author.interface';
import { CreateAuthorDto } from '@/dtos/authors.dto';

class AuthorController {
  public authorService = new authorService();

  public getAuthors = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { limit, offset } = req.query;
      const findAllAuthorsData: Author[] = await this.authorService.findAllAuthor({
        limit: limit ? Number(limit) : undefined,
        offset: offset ? Number(offset) : undefined,
      });

      res.status(200).json({ data: findAllAuthorsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getAuthorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      const findOneAuthorData: Author = await this.authorService.findAuthorById(userId);

      res.status(200).json({ data: findOneAuthorData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateAuthorDto = req.body;
      const createAuthorData: Author = await this.authorService.createAuthor(userData);

      res.status(201).json({ data: createAuthorData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      const userData: CreateAuthorDto = req.body;
      const updateAuthorData: Author = await this.authorService.updateAuthor(userId, userData);

      res.status(200).json({ data: updateAuthorData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      const deleteAuthorData: Author = await this.authorService.deleteAuthor(userId);

      res.status(200).json({ data: deleteAuthorData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthorController;
