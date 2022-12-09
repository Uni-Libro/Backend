export interface Voucher {
  id: number;
  code: string;
  discount: number;
  upTo: number;
  validFrom: Date;
  validTo: Date;
}
