import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "../../entity/member.entity";
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

    async findAllMemberData(): Promise<object> {
        const query = `select m.id as userId, 
                            m.name as name,  
                            case 
                                when grade = 1 then '회원' 
                                else '운영진' 
                            end as grade,
                            count(*) as count,
                            sum(score) as total,
                            max(score) as max,
                            min(score) as min,
                            avg(score) as avg
                        from member m 
                            left outer join play_game pg
                                on m.id = pg.userId 
                            left outer join score s
                                on s.gameId = pg.id
                        group by m.id`
        const data = await this.memberRepository.query(query)
        console.log('ballboy >>', data)
        return data
    }
}
