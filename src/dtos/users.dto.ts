import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public username: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public phone: string;
}

export class LoginUserDto {
  @IsString()
  public password: string;

  @IsString()
  public username: string;
}

export class OTPUserDto {
  @IsString()
  public phone: string;
}

export class ValidateOTPUserDto {
  @IsString()
  public phone: string;

  @IsString()
  public otp: string;
}
