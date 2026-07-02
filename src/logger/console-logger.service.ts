import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class ConsoleLoggerService {
  private readonly id = crypto.randomUUID();

  getLoggerId() {
    return this.id;
  }

  log(message: string) {
    console.log(`[Console Logger]: ${message}`);
  }
}
