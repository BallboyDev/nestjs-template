import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';
import { MemberController } from './bowlingAdminPage/members/member.controller';
import { BowlingModule } from './bowlingAdminPage/bowling.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './bowlingAdminPage/entity/member.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'ballboy_dev',
      entities: [Member],
      synchronize: true
    }),
    UsersModule,
    BowlingModule
  ],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule { }
