import { Module } from "@nestjs/common";
import { MemberController } from "./members/member.controller";
import { MemberService } from "./members/member.service";

@Module({
    imports: [],
    controllers: [MemberController],
    providers: [MemberService]
})
export class BowlingModule { }