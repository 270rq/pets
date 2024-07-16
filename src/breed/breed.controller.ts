import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedDto } from './dto/breed.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('breed')
@Controller('breed')
export class BreedController {constructor(private readonly breedService: BreedService) {}

@Get()
async getAllBreeds() {
  return this.breedService.getAll();
}

@Get(':id')
async getBreedById(@Param('id') id: number) {
  return this.breedService.getById(id);
}

@Post()
async createBreed(@Body() body: BreedDto) {
  return this.breedService.create(body);
}

@Put(':id')
async updateBreed(@Param('id') id: number, @Body() body: BreedDto) {
  return this.breedService.update(id, body);
}

@Delete(':id')
async deleteBreed(@Param('id') id: number) {
  return this.breedService.delete(id);
}}
