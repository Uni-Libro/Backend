import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import AuthorController from '@/controllers/author.controller';
import { CreateAuthorDto } from '@/dtos/authors.dto';
import validationMiddleware from '@/middlewares/validation.middleware';

class AuthorRoute implements Routes {
  public path = '/authors';
  public router = Router();
  public authorController = new AuthorController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.authorController.getAuthors);
    this.router.get(`${this.path}/:id(\\d+)`, this.authorController.getAuthorById);
    this.router.post(`${this.path}`, validationMiddleware(CreateAuthorDto, 'body'), this.authorController.createAuthor);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateAuthorDto, 'body', true), this.authorController.updateAuthor);
    this.router.delete(`${this.path}/:id(\\d+)`, this.authorController.deleteAuthor);
  }
}

export default AuthorRoute;
