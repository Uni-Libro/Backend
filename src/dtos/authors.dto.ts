import { IsString, IsUrl } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  public name: string;

  @IsUrl()
  public imageUrl: string;

  @IsString()
  public description: string;
}
