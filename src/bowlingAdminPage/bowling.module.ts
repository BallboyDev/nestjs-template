import { Module } from "@nestjs/common";
import { MemberController } from "./members/member.controller";
import { MemberService } from "./members/member.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Member } from "./entity/member.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Member])],
    controllers: [MemberController],
    providers: [MemberService]
})
export class BowlingModule { }


// 가족관계증명서, 주민등록등본 한달 이내 0.1% 