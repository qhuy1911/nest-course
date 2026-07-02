import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/services/logger.service';

@Module({
  imports: [LoggerModule],
  controllers: [BooksController],
  providers: [BooksService, LoggerService],
})
export class BooksModule {}
