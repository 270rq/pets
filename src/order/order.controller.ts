import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order')
@Controller('order')
export class OrderController {constructor(private readonly orderService: OrderService) {}

@Get()
async getAllFoods() {
  return this.orderService.getAll();
}

@Get(':id')
async getFoodById(@Param('id') id: number) {
  return this.orderService.getById(id);
}

@Post()
async createFood(@Body() body: OrderDto) {
  return this.orderService.create(body);
}

@Put(':id')
async updateFood(@Param('id') id: number, @Body() body: OrderDto) {
  return this.orderService.update(id, body);
}

@Delete(':id')
async deleteFood(@Param('id') id: number) {
  return this.orderService.delete(id);
}}
