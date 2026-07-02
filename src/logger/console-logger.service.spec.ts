import { Test, TestingModule } from '@nestjs/testing';
import { ConsoleLoggerService } from './console-logger.service';
import { LoggerService } from './logger.service';

describe('ConsoleLoggerService', () => {
  let service: ConsoleLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConsoleLoggerService,
        { provide: LoggerService, useClass: ConsoleLoggerService },
      ],
    }).compile();

    service = await module.resolve(ConsoleLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
