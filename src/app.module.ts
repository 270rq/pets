import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';
import { FoodController } from './food/food.controller';
import { FoodService } from './food/food.service';
import { FoodModule } from './food/food.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { PrismaModule } from './prisma/prisma.module';
import { BreedModule } from './breed/breed.module';

@Module({
  imports: [
    UserModule,
    PetModule,
    FoodModule,
    OrderModule,
    OrderItemModule,
    PrismaModule,
    BreedModule
  ],
  controllers: [
    UserController,
    FoodController,
  ],
  providers: [
    UserService,
    FoodService,
  ],
})
export class AppModule {}
