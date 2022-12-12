import { IsString, IsPhoneNumber, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public password: string;

  @IsPhoneNumber()
  public phone: string;
}

export class OTPUserDto {
  @IsPhoneNumber()
  public phone: string;
}

export class ValidateOTPUserDto {
  @IsPhoneNumber()
  public phone: string;

  @IsNumber()
  public otp: string;
}
