import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  // @Get('/hello')
  // @Get('/he*lo') // 와일드카드
  getHello(@Req() req: Request): string {
    // console.log(req)
    return this.appService.getHello();
  }
}
