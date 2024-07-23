import { Injectable } from '@nestjs/common';
import { IUser } from '../interface/interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.user.findMany();
  }

  async getById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: IUser) {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: number, data: IUser) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.user.delete({
      where: { id: id },
    });
  }
}
