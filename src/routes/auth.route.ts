import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { OTPUserDto, CreateUserDto, ValidateOTPUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { rateLimit } from 'express-rate-limit';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}update-password`, authMiddleware, this.authController.updatePassword);
    this.router.post(`${this.path}login`, validationMiddleware(CreateUserDto, 'body'), this.authController.logIn);
    this.router.post(`${this.path}validate`, authMiddleware, this.authController.validate);
    this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
    this.router.get('/otp', this.authController.getOTP);
    this.router.post(`${this.path}otp/send`, validationMiddleware(OTPUserDto, 'body'), rateLimit, this.authController.sendOTP);
    this.router.post(`${this.path}otp/validate`, validationMiddleware(ValidateOTPUserDto, 'body'), this.authController.validateOTP);
  }
}

export default AuthRoute;
