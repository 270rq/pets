import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { OrderItemDto } from './dto/orderItem.dto';

@Controller('order-item')
export class OrderItemController {constructor(private readonly orderItemService: OrderItemService) {}

@Get()
async getAllOrderItems() {
  return this.orderItemService.getAll();
}

@Get(':id')
async getOrderItemById(@Param('id') id: number) {
  return this.orderItemService.getById(id);
}

@Post()
async createOrderItem(@Body() body: OrderItemDto) {
  return this.orderItemService.create(body);
}

@Put(':id')
async updateOrderItem(@Param('id') id: number, @Body() body: OrderItemDto) {
  return this.orderItemService.update(id, body);
}

@Delete(':id')
async deleteOrderItem(@Param('id') id: number) {
  return this.orderItemService.delete(id);
}}
