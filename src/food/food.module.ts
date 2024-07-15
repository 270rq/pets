import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers:[FoodController],
    providers: [FoodService],
    imports: [PrismaModule]
})
export class FoodModule {}
