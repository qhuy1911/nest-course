import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [LoggerModule],
  controllers: [UsersController],
  providers: [UsersService, LoggerService],
})
export class UsersModule {}
