import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateBookDto {
  @IsString()
  public name: string;

  @IsString()
  public authorName: string;

  @IsUrl()
  public imageUrl: string;

  @IsNumber({}, { each: true })
  public category: Array<number>;

  @IsString()
  public description: string;

  @IsNumber()
  public price: number;
}
