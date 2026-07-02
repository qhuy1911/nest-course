import { Injectable, Logger, Scope } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class ConsoleLoggerService extends LoggerService {
  private readonly id = crypto.randomUUID();
  private readonly logger = new Logger(ConsoleLoggerService.name);

  getLoggerId(): string {
    return this.id;
  }

  log(message: string): void {
    this.logger.log(`[Console Logger]: ${message}`);
  }

  warn(message: string): void {
    this.logger.warn(`[Console Logger]: ${message}`);
  }
  error(message: string): void {
    this.logger.error(`[Console Logger]: ${message}`);
  }
  debug(message: string): void {
    this.logger.debug(`[Console Logger]: ${message}`);
  }
}
