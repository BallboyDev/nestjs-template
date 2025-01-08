import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "../entity/member.entity";
import { Repository } from "typeorm";

@Injectable()
export class MemberService {
    constructor(
        @InjectRepository(Member)
        private memberRepository: Repository<Member>
    ) { }

    async findAll(): Promise<Member[]> {
        const data = await this.memberRepository.find()
        console.log('ballboy >>', data)
        return data
    }
}