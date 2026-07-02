import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  private readonly id = crypto.randomUUID();

  getLoggerId() {
    return this.id;
  }

  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}
