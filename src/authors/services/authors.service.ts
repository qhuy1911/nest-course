import { Injectable, NotFoundException } from '@nestjs/common';
import { MOCK_AUTHORS } from '../mocks/authors.mock';
import { AuthorWithBooks } from '../entities/authors.entity';
import { BooksService } from '../../books/services/books.service';
import { PaginationResponse } from '../../common/types/pagination-response';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { LoggerService } from '../../logger/logger.service';

@Injectable()
export class AuthorsService {
  constructor(
    private readonly booksService: BooksService,
    private readonly logger: LoggerService,
  ) {}

  findAll(query: PaginationQueryDto): PaginationResponse<AuthorWithBooks> {
    const data = MOCK_AUTHORS.map(({ id, name, bookIds }) => ({
      id,
      name,
      books: this.booksService.findMany(bookIds),
    }));
    return {
      ...query,
      loggerId: this.logger.getLoggerId(),
      data,
    };
  }

  findBooksByAuthorId(authorId: number) {
    const author = MOCK_AUTHORS.find((author) => author.id === authorId);

    if (!author) {
      throw new NotFoundException('Author not found');
    }

    return {
      author: author.name,
      books: this.booksService.findMany(author.bookIds),
    };
  }
}
