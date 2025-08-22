import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Score } from "../../entity/score.entity";
import { Repository } from "typeorm";

@Injectable()
export class RecordService {
    constructor(
        @InjectRepository(Score)
        private scoreRepository: Repository<Score>
    ) { }

    async findAll(): Promise<Score[]> {
        return await this.scoreRepository.find()
    }

    async insertScore(): Promise<string> {
        const query = `insert `

        return 'test'
    }
}