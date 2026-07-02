import { Injectable, NotFoundException } from '@nestjs/common';
import { MOCK_AUTHORS } from '../mocks/authors.mock';
import { PaginationQueryParams, PaginationResponse } from 'src/constants';
import { Author } from '../entities/authors.entity';
import { BooksService } from 'src/books/services/books.service';

@Injectable()
export class AuthorsService {
  constructor(private readonly booksService: BooksService) {}

  findAll(queryParams: PaginationQueryParams): PaginationResponse<Author> {
    const data = MOCK_AUTHORS.map(({ id, name, bookIds }) => ({
      id,
      name,
      books: this.booksService.findMany(bookIds),
    }));
    return {
      ...queryParams,
      data,
    };
  }

  findBooksByAuthorId(authorId: string) {
    const author = MOCK_AUTHORS.find(
      (author) => author.id === parseInt(authorId),
    );

    if (!author) {
      throw new NotFoundException('Author not found');
    }

    return {
      author: author.name,
      books: this.booksService.findMany(author.bookIds),
    };
  }
}
