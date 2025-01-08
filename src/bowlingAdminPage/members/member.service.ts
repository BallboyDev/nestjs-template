import { Injectable } from "@nestjs/common";

@Injectable()
export class MemberService {
    async findAll(): Promise<string> {
        return 'test'
    }
}