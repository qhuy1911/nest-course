import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from './logger.service';
import { ConsoleLoggerService } from './console-logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConsoleLoggerService,
        { provide: LoggerService, useClass: ConsoleLoggerService },
      ],
    }).compile();

    service = await module.resolve<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
