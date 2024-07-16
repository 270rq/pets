import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Post()
  async createUser(@Body() body: UserDto) {
    return this.userService.create(body);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() body: UserDto) {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
