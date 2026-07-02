import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MOCK_BOOKS } from '../mocks/books.mock';
import { Book } from '../entities/book.entity';
import { PaginationQueryParams, PaginationResponse } from 'src/constants';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class BooksService {
  constructor(private readonly logger: LoggerService) {}

  findAll(queryParams: PaginationQueryParams): PaginationResponse<Book> {
    this.logger.log('Finding all books');
    return {
      loggerId: this.logger.getLoggerId(),
      ...queryParams,
      data: MOCK_BOOKS.getAll,
    };
  }

  findMany(ids: number[]): Book[] {
    return ids.flatMap((bookId) => {
      const book = this.findOne(bookId.toString());
      return book ? [book] : [];
    });
  }

  findOne(id: string) {
    return MOCK_BOOKS.getAll.find((book) => book.id === parseInt(id));
  }

  create(body: Book) {
    const existingBook = MOCK_BOOKS.getAll.find((book) => book.id === body.id);
    if (existingBook) {
      throw new BadRequestException('Book with this id already exists');
    }

    return {
      ...body,
    };
  }

  update(id: string, body: Book) {
    const existingBook = MOCK_BOOKS.getAll.find(
      (book) => book.id === parseInt(id),
    );
    if (!existingBook) {
      throw new NotFoundException('Book not found');
    }

    return {
      ...existingBook,
      ...body,
    };
  }

  remove(id: string) {
    const existingBook = MOCK_BOOKS.getAll.find(
      (book) => book.id === parseInt(id),
    );
    if (!existingBook) {
      throw new NotFoundException('Book not found');
    }

    return {
      ...existingBook,
    };
  }
}
