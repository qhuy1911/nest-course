import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import * as booksModel from './entities/book.entity';
import { PaginationQueryParams } from 'src/constants';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 5) {
    const queryParams: PaginationQueryParams = {
      page,
      limit,
    };
    return this.booksService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Post()
  create(@Body() body: booksModel.Book) {
    return this.booksService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: booksModel.Book) {
    return this.booksService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
