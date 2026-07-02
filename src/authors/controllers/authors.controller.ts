import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AuthorsService } from '../services/authors.service';
import { PaginationQueryParams } from 'src/constants';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 5) {
    const queryParams: PaginationQueryParams = {
      page,
      limit,
    };
    return this.authorsService.findAll(queryParams);
  }

  @Get(':id/books')
  findBooksByAuthorId(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.findBooksByAuthorId(id);
  }
}
