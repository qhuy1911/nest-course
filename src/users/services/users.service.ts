import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/services/logger.service';

@Injectable()
export class UsersService {
  constructor(private readonly logger: LoggerService) {}

  findAll() {
    this.logger.log('Finding all users');
    return {
      loggerId: this.logger.getLoggerId(),
      message: 'Welcome to Users API',
    };
  }
}
