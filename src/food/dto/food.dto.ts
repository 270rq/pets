import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsPositive } from 'class-validator';
import { IFood } from '../../interface/interface';

export class FoodDto implements Partial<IFood> {
    @ApiProperty({ example: 'Pizza', description: 'The name of the food' })
    @IsString()
    name: string;

    @ApiProperty({ example: '10.99', description: 'The price of the food' })
    @IsString()
    price: string;

    @ApiProperty({ example: 500, description: 'The weight of the food in grams' })
    @IsNumber()
    @IsPositive()
    weight: number;

    @ApiProperty({ example: 1, description: 'ID of the target consumer group' })
    @IsNumber()
    @IsPositive()
    breedId: number;
}
