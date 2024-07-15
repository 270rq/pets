import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { IOrderItem } from 'src/interface/interface';

export class OrderItemDto implements Partial<IOrderItem> {
    @ApiProperty({ example: 1, description: 'The ID of the order related to this item' })
    @IsNumber()
    orderId: number;

    @ApiProperty({ example: 1, description: 'The ID of the food item in the order' })
    @IsNumber()
    foodId: number;
}
