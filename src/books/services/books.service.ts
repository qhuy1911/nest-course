import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MOCK_BOOKS } from '../mocks/books.mock';
import { Book } from '../entities/book.entity';
import { LoggerService } from '../../logger/logger.service';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { PaginationResponse } from '../../common/types/pagination-response';
import {
  APP_CONFIG,
  type AppConfig,
} from '../../providers/app-config.provider';

@Injectable()
export class BooksService {
  constructor(
    private readonly logger: LoggerService,
    @Inject(APP_CONFIG) private readonly config: AppConfig,
  ) {}

  findAll(queryParams: PaginationQueryDto): PaginationResponse<Book> {
    this.logger.log('Finding all books');
    return {
      loggerId: this.logger.getLoggerId(),
      ...queryParams,
      data: MOCK_BOOKS,
    };
  }

  findMany(ids: number[]): Book[] {
    return ids.map((id) => this.findOne(id));
  }

  findOne(id: number): Book {
    const book = MOCK_BOOKS.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
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

  getConfig(): AppConfig {
    return this.config;
  }
}
