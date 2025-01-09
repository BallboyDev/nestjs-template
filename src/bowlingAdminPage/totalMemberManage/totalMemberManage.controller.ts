import { Controller, Get } from "@nestjs/common";
import { TotalMemberManageService } from "./totalMembermanage.service";

@Controller('pab')
export class TotalMemberManageController {
    constructor(private readonly totalMemberManageService: TotalMemberManageService) { }

    @Get()
    getAllMember() {
        return this.totalMemberManageService.getAllMember()
    }
}