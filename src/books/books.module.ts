import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  // imports: [LoggerService],
  controllers: [BooksController],
  providers: [BooksService, LoggerService],
})
export class BooksModule {}
