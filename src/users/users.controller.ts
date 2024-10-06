import { BadRequestException, Body, Controller, Delete, Get, Header, HttpCode, Param, Patch, Post, Redirect, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from 'src/users/dto/UpdateUser.dto';
import { CreateUserDto } from './dto/CreateUser.dto';

/**
 * POST   /users    201   this action adds a new user
 * GET    /users    200   this action returns all users
 * GET    /users/1  200   this action returns a #1 user
 * PATCH  /users/1  200   this action updates a #1 user
 * DELETE /users1   200   this actino removes a #1 user
 */

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async findAll(@Res()/** @Res 데커레이터를 이용해서  Express응답 객체 사용 가능 */ res) {
    const users = this.usersService.findAll()

    return res.statsu(200).send(users);
  }

  // @Header('Custom', 'Test Header') // 응답에 커스텀 헤더를 추가
  // @Redirect('https://nestjs.com', 301) // 클라이언트 리다이렉션
  @Get(':id')
  async findOne(@Param(':id') id: number) {
    if (+id < 1) {
      throw new BadRequestException('id는 0보다 큰 값이어야 합니다.')
    }

    return this.usersService.findOne(+id)
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto

    return `유저를 생성했습니다. 이름: ${name}, 이메일: ${email}`
  }

  @HttpCode(202) // 상태코드 변경 가능
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto)
  }

  @Delete(':userId/memo/:memoId')
  async deleteUserMemo(
    // @Param() params: { [key: string]: string }
    @Param('userId') userId: string,
    @Param('memoId') memoId: string
  ) {
    // return `userId: ${params.userId}, memoId: ${params.memoId}`
    return `userId: ${userId}, memoId: ${memoId}`
  }


}
