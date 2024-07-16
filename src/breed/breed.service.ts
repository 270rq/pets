import { Injectable } from '@nestjs/common';
import { IBreed } from 'src/interface/interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BreedService { constructor(private prisma: PrismaService) {}

async getAll() {
  return this.prisma.breed.findMany();
}

async getById(id: number) {
  return this.prisma.breed.findUnique({
    where: { id },
  });
}

async create(data: IBreed) {
  return this.prisma.breed.create({
    data,
  });
}

async update(id: number, data: IBreed) {
  return this.prisma.breed.update({
    where: { id },
    data,
  });
}

async delete(id: number) {
  return this.prisma.breed.delete({
    where: { id },
  });
}}
