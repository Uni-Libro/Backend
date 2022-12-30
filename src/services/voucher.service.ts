import { PAGE_SIZE } from '@/config';
import { Pagination } from '@/interfaces/API.interface';
import DB from '@databases';
import { CreateVoucherDto } from '@dtos/voucher.dto';
import { HttpException } from '@exceptions/HttpException';
import { Voucher } from '@interfaces/voucher.interface';
import { isEmpty } from '@utils/util';

class VoucherService {
  public voucher = DB.Voucher;

  public async findAllVoucher({ limit, page }: Pagination): Promise<Voucher[]> {
    return this.voucher.findAll({
      limit,
      offset: page ? page * PAGE_SIZE : undefined,
    });
  }

  public async findVoucherById(voucherId: number): Promise<Voucher> {
    const findedVoucher: Voucher = await this.voucher.findOne({ where: { id: voucherId } });
    if (!findedVoucher) throw new HttpException(404, "The voucher you're looking for doesn't exist");

    return findedVoucher;
  }

  public async createVoucher(voucherData: CreateVoucherDto): Promise<Voucher> {
    if (isEmpty(voucherData)) throw new HttpException(400, 'The voucher should have data');

    return this.voucher.create({ ...voucherData });
  }

  public async updateVoucher(voucherId: number, voucherData: CreateVoucherDto): Promise<Voucher> {
    if (isEmpty(voucherData)) throw new HttpException(400, 'The voucher should have data');

    const findedVoucher: Voucher = await this.voucher.findOne({ where: { id: voucherId } });
    if (!findedVoucher) throw new HttpException(404, "The voucher you're looking for doesn't exist");

    await this.voucher.update({ ...voucherData }, { where: { id: voucherId } });

    return findedVoucher;
  }

  public async deleteVoucher(voucherId: number): Promise<Voucher> {
    const findedVoucher: Voucher = await this.voucher.findOne({ where: { id: voucherId } });
    if (!findedVoucher) throw new HttpException(404, "The voucher you're looking for doesn't exist");

    await this.voucher.destroy({ where: { id: voucherId } });

    return findedVoucher;
  }

  public async findVoucherByCode(voucherCode: string): Promise<Voucher> {
    const findedVoucher: Voucher = await this.voucher.findOne({ where: { code: voucherCode } });
    if (!findedVoucher) throw new HttpException(404, "The voucher you're looking for doesn't exist");

    return findedVoucher;
  }

  public async calculateDiscount(voucherCode: string, total: number): Promise<number> {
    const voucher = await this.findVoucherByCode(voucherCode);
    if (voucher.validFrom && voucher.validFrom > new Date()) throw new HttpException(400, 'The voucher is not valid yet');
    if (voucher.validTo && voucher.validTo < new Date()) throw new HttpException(400, 'The voucher is expired');
    const discount = Math.min(total * (voucher.discount / 100), voucher.upTo);
    return discount;
  }
}

export default VoucherService;
