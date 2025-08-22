import { Controller, Get, Post } from "@nestjs/common";
import { RecordService } from "./records.service";

@Controller('bap/records')
export class RecordController {
    constructor(private readonly recordService: RecordService) { }

    @Get()
    findAll() {
        return this.recordService.findAll()
    }

    @Post()
    insertScore() {
        return this.recordService.insertScore()
    }
}