import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetDto } from './dto/pet.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pet')
@Controller('pet')
export class PetController {constructor(private readonly petService: PetService) {}

@Get()
async getAllPets() {
  return this.petService.getAll();
}

@Get(':id')
async getPetById(@Param('id') id: number) {
  return this.petService.getById(id);
}

@Post()
async createPet(@Body() body: PetDto) {
  return this.petService.create(body);
}

@Put(':id')
async updatePet(@Param('id') id: number, @Body() body: PetDto) {
  return this.petService.update(id, body);
}

@Delete(':id')
async deletePet(@Param('id') id: number) {
  return this.petService.delete(id);
}}
