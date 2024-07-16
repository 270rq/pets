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
}
async findIncorrectOrders() {
    const orders = await this.prisma.order.findMany({
        include: {
            user: {
                include: {
                    pets: {
                        include: {
                            breed: true }
                    }
                }
            },
            orderItems: {
                include: {
                    food: {
                        include: {
                            breed: true  
                        }
                    }
                }
            }
        }
    });

    orders.forEach(order => {
        const userPetBreeds = order.user.pets.map(pet => pet.breed.name);

        const incorrectItems = order.orderItems.filter(item => !userPetBreeds.includes(item.food.breed.name));

        if (incorrectItems.length > 0) {
            console.log(`Order ${order.id} has incorrect items: `, incorrectItems.map(item => ({
                food: item.food.name,
                breed: item.food.breed.name
            })));
        }
        else {
            console.log('ok')
        }
    });
}

}
