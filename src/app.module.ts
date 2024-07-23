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
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.stategy';

@Module({
  imports: [
    UserModule,
    PetModule,
    FoodModule,
    OrderModule,
    OrderItemModule,
    PrismaModule,
    BreedModule,
    AuthModule
  ],
  controllers: [
    UserController,
    FoodController,
  ],
  providers: [
    JwtStrategy,
    UserService,
    FoodService,
  ],
})
export class AppModule {}
