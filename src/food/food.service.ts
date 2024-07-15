import { Injectable } from '@nestjs/common';
import { IFood } from '../interface/interface';
import { PrismaService } from 'src/prisma/prisma.service';

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
}}
