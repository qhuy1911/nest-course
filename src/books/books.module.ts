import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [LoggerModule],
  controllers: [BooksController],
  providers: [BooksService, LoggerService],
})
export class BooksModule {}
