import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateBookDto {
  @IsString()
  public name: string;

  @IsString()
  public authorName: string;

  @IsUrl()
  public imageUrl: string;

  @IsString()
  public category: string;

  @IsString()
  public description: string;

  @IsNumber()
  public price: string;
}
