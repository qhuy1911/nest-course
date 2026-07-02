import { Module } from '@nestjs/common';
import { AuthorsController } from './controllers/authors.controller';
import { AuthorsService } from './services/authors.service';
import { BooksModule } from '../books/books.module';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [BooksModule, LoggerModule],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
