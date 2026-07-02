import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';
import { LoggerModule } from '../logger/logger.module';
import { APP_CONFIG } from '../providers/app-config.provider';
import { LoggerMiddleware } from '../logger/logger.middleware';

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
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude('books/config')
      .forRoutes(BooksController);
  }
}
