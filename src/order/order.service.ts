import { Injectable } from '@nestjs/common';
import { IOrder } from 'src/interface/interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {constructor(private prisma: PrismaService){}
async getAll(){
    return this.prisma.order.findMany()
}
async getById(id:number){
    return this.prisma.order.findFirst({where: {id}})
}
async create(data: IOrder){
    return this.prisma.order.create({data})
}
async update(id:number, data: IOrder){
    return this.prisma.order.update({where: {id},
    data})
}
async delete(id:number){
    return this.prisma.order.delete({where: {id}})
}}
