import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDateString, IsString } from 'class-validator';
import { IOrder } from 'src/interface/interface';

export class OrderDto implements Partial<IOrder> {
    @ApiProperty({ example: 1, description: 'The ID of the user placing the order' })
    @IsNumber()
    userId: number;

    @ApiProperty({ example: new Date(), description: 'The date and time when the order was placed' })
    @IsDateString()
    date: Date;

    @ApiProperty({ example: '5 stars', description: 'The rating given for the order' })
    @IsString()
    rating: string;
}
