import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { finalize } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler) {
    const now = Date.now();
    const request: Request = context.switchToHttp().getRequest();

    this.logger.log(`${request.method} ${request.url}`);

    return next.handle().pipe(
      finalize(() => {
        this.logger.log(
          `${request.method} ${request.url} - ${Date.now() - now}ms`,
        );
      }),
    );
  }
}
