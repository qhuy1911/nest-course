import { Book } from 'src/books/entities/book.entity';

export interface Author {
  id: number;
  name: string;
  bookIds: number[];
}

export interface AuthorWithBooks {
  id: number;
  name: string;
  books: Book[];
}
