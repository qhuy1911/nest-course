import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class ConsoleLoggerService {
  private readonly id = crypto.randomUUID();
  private readonly logger = new Logger(ConsoleLoggerService.name);

  getLoggerId(): string {
    return this.id;
  }

  log(message: string): void {
    this.logger.log(`[Console Logger]: ${message}`);
  }
}
