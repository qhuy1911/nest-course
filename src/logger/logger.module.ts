import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { ConsoleLoggerService } from './console-logger.service';

@Module({
  providers: [
    ConsoleLoggerService,
    { provide: LoggerService, useClass: ConsoleLoggerService },
  ],
  exports: [LoggerService],
})
export class LoggerModule {}
