import { IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  public username: string;

  @IsString()
  public password: string;
}
