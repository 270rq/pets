import { ApiProperty } from '@nestjs/swagger';
import { IPet } from '../../interface/interface';

export class PetDto implements Partial<IPet> {

    @ApiProperty({ example: 'Buddy' })
    name: string;

    @ApiProperty({ example: 'Dog' })
    animal: string;

    @ApiProperty({ example: 1 })
    breedId: number;

    @ApiProperty({ example: 1 })
    userId: number;
}
