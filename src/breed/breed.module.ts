import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [BreedService],
  controllers: [BreedController],
  imports: [PrismaModule]
})
export class BreedModule {}
