import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { LoggerModule } from '../../logger/logger.module';
import { APP_CONFIG } from '../../providers/app-config.provider';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
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

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
