import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import CategoryController from '@/controllers/category.controller';
import { CreateCategoryDto } from '@/dtos/category.dto';
import validationMiddleware from '@/middlewares/validation.middleware';

class CategoryRoute implements Routes {
  public path = '/categories';
  public router = Router();
  public categoryController = new CategoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.categoryController.getCategories);
    this.router.get(`${this.path}/:id(\\d+)`, this.categoryController.getCategoryById);
    this.router.post(`${this.path}`, validationMiddleware(CreateCategoryDto, 'body'), this.categoryController.createCategory);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateCategoryDto, 'body', true), this.categoryController.updateCategory);
    this.router.delete(`${this.path}/:id(\\d+)`, this.categoryController.deleteCategory);
  }
}

export default CategoryRoute;
