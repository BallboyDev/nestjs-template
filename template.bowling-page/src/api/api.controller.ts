import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: 'api.localhost' }) // 하위 도메인 요청 처리 설정
export class ApiController {
    @Get()
    index(): string {
        return 'Hello, API'
    }
}

// 버전별 API 분리 예제
// @Controller({ host: ':version.api.localhost' })
// export class ApiController {
//     @Get()
//     index(@HostParam('version') version: string): string {
//         return `Hello, API ${version}`
//     }
// }