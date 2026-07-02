import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';
import { LoggerModule } from '../logger/logger.module';
import { APP_CONFIG } from 'src/providers/app-config.provider';

@Module({
  imports: [LoggerModule],
  controllers: [BooksController],
  providers: [
    BooksService,
    {
      provide: APP_CONFIG,
      useValue: {
        appName: 'Nest Course',
        version: '1.0.0',
      },
    },
  ],
  exports: [BooksService],
})
export class BooksModule {}
