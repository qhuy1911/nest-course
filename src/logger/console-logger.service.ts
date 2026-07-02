import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ConsoleLoggerService {
  private readonly id = crypto.randomUUID();
  private readonly logger = new Logger(ConsoleLoggerService.name);

  getLoggerId() {
    return this.id;
  }

  log(message: string) {
    this.logger.log(`[Console Logger]: ${message}`);
  }
}
