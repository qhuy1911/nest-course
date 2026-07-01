import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class UsersService {
  constructor(private logger: LoggerService) {}

  findAll() {
    this.logger.log('Finding all users');
    return {
      loggerId: this.logger.getLoggerId(),
      message: 'Welcome to Users API',
    };
  }
}
