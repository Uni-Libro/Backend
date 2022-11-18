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
}

export class LoginUserDto {
  @IsString()
  public password: string;

  @IsString()
  public username: string;
}
