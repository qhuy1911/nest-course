/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export type PaginationQueryParams = {
  page: number;
  limit: number;
};

export type PaginationResponse<T> = {
  loggerId?: number;
  page: number;
  limit: number;
  data: T[];
};

export class PaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit: number = 5;
}
