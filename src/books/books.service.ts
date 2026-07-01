import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MOCK_BOOKS } from './mocks/books.mock';
import { Book } from './entities/book.entity';
import { PaginationQueryParams } from 'src/constants';

@Injectable()
export class BooksService {
  findAll(queryParams: PaginationQueryParams) {
    return {
      ...queryParams,
      data: MOCK_BOOKS.getAll,
    };
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
