import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { finalize, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler) {
    console.log('Before');
    const now = Date.now();

    return next.handle().pipe(
      finalize(() => {
        console.log('Execution time:', Date.now() - now);
      }),
    );
  }
}
