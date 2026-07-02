import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  private readonly id = Math.random();

  getLoggerId() {
    return this.id;
  }

  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}
