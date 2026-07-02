import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/services/logger.service';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [LoggerModule],
  controllers: [UsersController],
  providers: [UsersService, LoggerService],
})
export class UsersModule {}
