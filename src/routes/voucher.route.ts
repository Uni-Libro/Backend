import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import VoucherController from '@/controllers/voucher.controller';
import { CreateVoucherDto } from '@/dtos/voucher.dto';
import validationMiddleware from '@/middlewares/validation.middleware';

class VoucherRoute implements Routes {
  public path = '/vouchers';
  public router = Router();
  public voucherController = new VoucherController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.voucherController.getVouchers);
    this.router.get(`${this.path}/:id(\\d+)`, this.voucherController.getVoucherById);
    this.router.post(`${this.path}`, validationMiddleware(CreateVoucherDto, 'body'), this.voucherController.createVoucher);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateVoucherDto, 'body', true), this.voucherController.updateVoucher);
    this.router.delete(`${this.path}/:id(\\d+)`, this.voucherController.deleteVoucher);
  }
}

export default VoucherRoute;
