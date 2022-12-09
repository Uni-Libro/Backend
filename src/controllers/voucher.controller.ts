import { NextFunction, Request, Response } from 'express';
import voucherService from '@services/voucher.service';
import { Voucher } from '@/interfaces/voucher.interface';
import { CreateVoucherDto } from '@/dtos/voucher.dto';

class VoucherController {
  public voucherService = new voucherService();

  public getVouchers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllVouchersData: Voucher[] = await this.voucherService.findAllVoucher();

      res.status(200).json({ data: findAllVouchersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getVoucherById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      const findOneVoucherData: Voucher = await this.voucherService.findVoucherById(userId);

      res.status(200).json({ data: findOneVoucherData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createVoucher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateVoucherDto = req.body;
      const createVoucherData: Voucher = await this.voucherService.createVoucher(userData);

      res.status(201).json({ data: createVoucherData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateVoucher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      const userData: CreateVoucherDto = req.body;
      const updateVoucherData: Voucher = await this.voucherService.updateVoucher(userId, userData);

      res.status(200).json({ data: updateVoucherData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteVoucher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      const deleteVoucherData: Voucher = await this.voucherService.deleteVoucher(userId);

      res.status(200).json({ data: deleteVoucherData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default VoucherController;
