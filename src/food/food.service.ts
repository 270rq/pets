import { Injectable } from '@nestjs/common';
import { IFood } from '../interface/interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnimalFoodDto } from './dto/petfoodcomb.dto';

@Injectable()
export class FoodService { constructor(private prisma: PrismaService) {}

async getAll() {
  return this.prisma.food.findMany();
}

async getById(id: number) {
  return this.prisma.food.findUnique({
    where: { id },
  });
}

async create(data: IFood) {
  return this.prisma.food.create({
    data,
  });
}

async update(id: number, data: IFood) {
  return this.prisma.food.update({
    where: { id },
    data,
  });
}

async delete(id: number) {
  return this.prisma.food.delete({
    where: { id },
  });
}

// async getAnimalFood(): Promise<AnimalFoodDto[]> {
//   const animals = await this.prisma.pet.findMany({
//     include: {
//       user: true,
//       food: true,
//     },
//   });

//   const uniqueCombinations: Set<AnimalFoodDto> = new Set();

//   animals.forEach(pet => {
//     pet.food.forEach(food => {
//       uniqueCombinations.add(new AnimalFoodDto(pet.name, food.name));
//     });
//   });

//   return Array.from(uniqueCombinations);
// }
}
