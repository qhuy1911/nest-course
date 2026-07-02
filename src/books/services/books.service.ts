import { Injectable, NotFoundException } from '@nestjs/common';
import { MOCK_BOOKS } from '../mocks/books.mock';
import { Book } from '../entities/book.entity';
import { PaginationQueryDto, PaginationResponse } from 'src/constants';
import { LoggerService } from 'src/logger/logger.service';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private readonly logger: LoggerService) {}

  findAll(queryParams: PaginationQueryDto): PaginationResponse<Book> {
    this.logger.log('Finding all books');
    return {
      loggerId: this.logger.getLoggerId(),
      ...queryParams,
      data: MOCK_BOOKS,
    };
  }

  findMany(ids: number[]): Book[] {
    return ids.flatMap((bookId) => {
      const book = this.findOne(bookId);
      return book ? [book] : [];
    });
  }

  findOne(id: number) {
    return MOCK_BOOKS.find((book) => book.id === id);
  }

  create(body: CreateBookDto) {
    return {
      id: MOCK_BOOKS.length + 1,
      ...body,
    };
  }

  update(id: number, body: UpdateBookDto) {
    const existingBook = MOCK_BOOKS.find((book) => book.id === id);
    if (!existingBook) {
      throw new NotFoundException('Book not found');
    }

    return {
      ...existingBook,
      ...body,
    };
  }

  remove(id: number) {
    const existingBook = MOCK_BOOKS.find((book) => book.id === id);
    if (!existingBook) {
      throw new NotFoundException('Book not found');
    }

    return {
      ...existingBook,
    };
  }
}
