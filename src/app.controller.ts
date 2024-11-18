import { Controller, Get, Param, Query, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
// import { CustomExceptionFilter } from './custom-exception.filter';

@Controller('testing')
// @UseFilters(new CustomExceptionFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('greetings')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getDeveloperName(): string {
    return this.appService.getDeveloperName();
  }

  @Get('greet/:name')
  greetByName(@Param('name') name: string): string {
    return this.appService.greetByName(name);
  }

  @Get('age')
  getAge(@Query('birthYear') birthYear: number): string {
    if (isNaN(birthYear)) {
      throw new Error('Invalid birth year');
    }
    return this.appService.getAge(birthYear);
  }
}
