import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodDto } from './dto/food.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('food')
@Controller('food')
export class FoodController {constructor(private readonly foodService: FoodService) {}

@Get()
async getAllFoods() {
  return this.foodService.getAll();
}

@Get(':id')
async getFoodById(@Param('id') id: number) {
  return this.foodService.getById(id);
}

@Post()
async createFood(@Body() body: FoodDto) {
  return this.foodService.create(body);
}

@Put(':id')
async updateFood(@Param('id') id: number, @Body() body: FoodDto) {
  return this.foodService.update(id, body);
}

@Delete(':id')
async deleteFood(@Param('id') id: number) {
  return this.foodService.delete(id);
}}


