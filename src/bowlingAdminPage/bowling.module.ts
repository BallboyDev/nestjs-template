import { Module } from "@nestjs/common";
import { MemberController } from "./members/member.controller";
import { MemberService } from "./members/member.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Member } from "../entity/member.entity";
import { Score } from "../entity/score.entity";
import { PlayGame } from "../entity/playGame.entity";
import { RecordController } from "./records/records.controller";
import { RecordService } from "./records/records.service";

@Module({
    imports: [TypeOrmModule.forFeature([Member, Score, PlayGame])],
    controllers: [MemberController, RecordController],
    providers: [MemberService, RecordService]
})
export class BowlingModule { }
