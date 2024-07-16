import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BreedDto {
    @ApiProperty({ example: 'Labrador Retriever', description: 'The name of the breed' })
    @IsString()
    name: string;
}
