import { Book } from 'src/books/entities/book.entity';

export type Author = {
  id: number;
  name: string;
  books: Book[];
};
