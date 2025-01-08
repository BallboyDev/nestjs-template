import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';
import { MemberController } from './bowlingAdminPage/members/member.controller';
import { BowlingModule } from './bowlingAdminPage/bowling.module';

@Module({
  imports: [UsersModule, BowlingModule],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule { }
