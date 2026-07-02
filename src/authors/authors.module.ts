import { Module } from '@nestjs/common';
import { AuthorsController } from './controllers/authors.controller';
import { AuthorsService } from './services/authors.service';
import { BooksModule } from 'src/books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
