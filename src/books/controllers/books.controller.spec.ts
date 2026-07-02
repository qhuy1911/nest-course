import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { LoggerModule } from '../../logger/logger.module';
import { BooksService } from '../services/books.service';
import { APP_CONFIG } from '../../providers/app-config.provider';

describe('BooksController', () => {
  let controller: BooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
    }).compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
