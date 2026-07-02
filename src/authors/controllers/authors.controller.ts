import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AuthorsService } from '../services/authors.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  findAll(@Query() query: PaginationQueryDto) {
    return this.authorsService.findAll(query);
  }

  @Get(':id/books')
  findBooksByAuthorId(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.findBooksByAuthorId(id);
  }
}
