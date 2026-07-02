import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsService } from './authors.service';
import { BooksModule } from '../../books/books.module';
import { LoggerModule } from '../../logger/logger.module';

describe('AuthorsService', () => {
  let service: AuthorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BooksModule, LoggerModule],
      providers: [AuthorsService],
    }).compile();

    service = module.get<AuthorsService>(AuthorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
