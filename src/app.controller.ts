import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('testing')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('greetings')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getDeveloperName() : string {
    return this.appService.getDeveloperName();
  }
}
