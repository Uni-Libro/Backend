import { NextFunction, Request, Response } from 'express';
import { CreateUserDto, OTPUserDto, ValidateOTPUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import { RequestWithUser } from '@interfaces/auth.interface';
import AuthService from '@services/auth.service';

class AuthController {
  public authService = new AuthService();

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const tokenData = await this.authService.login(userData);

      res.status(200).json({ data: tokenData, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public getOTP = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const otps = await this.authService.getOTPs();

      res.status(200).json({ data: otps, message: 'otps' });
    } catch (error) {
      next(error);
    }
  };

  public updatePassword = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const { password } = req.body;
      const tokenData = await this.authService.updatePassword(req.user, password);

      res.status(200).json({ data: tokenData, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.authService.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };

  public validate = async (req: RequestWithUser, res: Response) => {
    res.status(204).json();
  };

  //method for sending OTP
  public sendOTP = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: OTPUserDto = req.body;
      await this.authService.sendOTP(userData);

      res.status(200).json({ message: 'OTP send successful' });
    } catch (error) {
      next(error);
    }
  };

  //method for validating OTP
  public validateOTP = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: ValidateOTPUserDto = req.body;
      const tokenData = await this.authService.validateOTP(userData);

      res.status(200).json({ data: tokenData, message: 'login' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
