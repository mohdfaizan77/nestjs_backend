import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: { username: string; password: string; email: string }): Promise<User> {
    const { username, password, email } = createUserDto;
    return this.userService.createUser(username, password, email);
  }

  @Get('getdata')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
