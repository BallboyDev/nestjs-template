import { Controller, Get } from "@nestjs/common";
import { MemberService } from "./member.service";

@Controller('bowling')
export class MemberController {
    constructor(private readonly memberService: MemberService) { }

    @Get()
    member() {
        return this.memberService.findAll();
    }
}