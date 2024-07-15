import { Injectable } from '@nestjs/common';
import { IOrderItem } from 'src/interface/interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderItemService {constructor(private prisma: PrismaService){}
async getAll(){
    return this.prisma.orderItem.findMany()
}
async getById(id:number){
    return this.prisma.orderItem.findFirst({where: {id}})
}
async create(data: IOrderItem){
    return this.prisma.orderItem.create({data})
}
async update(id:number, data: IOrderItem){
    return this.prisma.orderItem.update({where: {id},
    data})
}
async delete(id:number){
    return this.prisma.orderItem.delete({where: {id}})
}}
