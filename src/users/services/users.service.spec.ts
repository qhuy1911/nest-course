import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { LoggerModule } from '../../logger/logger.module';
import { UsersController } from '../controllers/users.controller';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
