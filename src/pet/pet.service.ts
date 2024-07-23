import { Injectable } from '@nestjs/common';
import { IPet } from '../interface/interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PetService 
{constructor(private prisma: PrismaService){}
async getAll(){
    return this.prisma.pet.findMany()
}
async getById(id:number){
    return this.prisma.pet.findFirst({where: {id}})
}
async create(data: IPet){
    return this.prisma.pet.create({data})
}
async update(id:number, data: IPet){
    return this.prisma.pet.update({where: {id},
    data})
}
async delete(id:number){
    return this.prisma.pet.delete({where: {id}})
}}
