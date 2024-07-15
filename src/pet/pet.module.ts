import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PetController],
  providers: [PetService],
  imports: [PrismaModule]
})
export class PetModule {}
