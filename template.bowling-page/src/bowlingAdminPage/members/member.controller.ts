import { Controller, Get } from "@nestjs/common";
import { MemberService } from "./member.service";

@Controller('bap/member')
export class MemberController {
    constructor(private readonly memberService: MemberService) { }

    @Get('member')
    findAll() {
        return this.memberService.findAll();
    }

    @Get()
    findAllMemberData() {
        return this.memberService.findAllMemberData()
    }
}