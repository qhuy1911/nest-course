import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsController } from './authors.controller';
import { BooksModule } from '../../books/books.module';
import { LoggerModule } from '../../logger/logger.module';
import { AuthorsService } from '../services/authors.service';

describe('AuthorsController', () => {
  let controller: AuthorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BooksModule, LoggerModule],
      controllers: [AuthorsController],
      providers: [AuthorsService],
    }).compile();

    controller = module.get<AuthorsController>(AuthorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
