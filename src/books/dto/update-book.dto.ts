/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  title?: string;
}
