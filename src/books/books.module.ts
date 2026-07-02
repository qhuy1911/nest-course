import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
