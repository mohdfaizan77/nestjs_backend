import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDeveloperName() : string {
    return 'Mohd Faizan Arif'
  }
}
