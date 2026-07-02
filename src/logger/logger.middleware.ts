import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, _res: Response, next: NextFunction): void {
    this.logger.log(`HTTP Method: ${req.method}`);
    this.logger.log(`URL: ${req.url}`);
    this.logger.log(`Current timestamp: ${new Date().toISOString()}`);
    next();
  }
}
