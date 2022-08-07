import { IsNotEmpty, IsEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
