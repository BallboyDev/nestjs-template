import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/UpdateUser.dto';

@Injectable()
export class UsersService {
    async findAll() {
        return null
    }

    async findOne(id: number) {
        return null
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        return null
    }

}
