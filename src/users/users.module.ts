import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  // imports: [LoggerService],
  controllers: [UsersController],
  providers: [UsersService, LoggerService],
})
export class UsersModule {}
