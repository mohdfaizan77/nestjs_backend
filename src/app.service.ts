import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDeveloperName(): string {
    return 'Mohd Faizan Arif';
  }

  greetByName(name: string): string {
    return `Hello, ${name}!`;
  }

  getAge(birthYear: number): string {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return `You are ${age} years old.`;
  }
}
