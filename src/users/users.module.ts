import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { LoggerModule } from 'src/logger/logger.module';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [LoggerModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
