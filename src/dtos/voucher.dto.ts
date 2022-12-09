import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateVoucherDto {
  @IsString()
  public code: string;

  @IsNumber()
  public discount: number;

  @IsNumber()
  public upTo: number;

  @IsDate()
  public validFrom: Date;

  @IsDate()
  public validTo: Date;
}
