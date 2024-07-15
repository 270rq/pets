import { ApiProperty } from '@nestjs/swagger';
import { IPet } from 'src/interface/interface';

export class PetDto implements Partial<IPet> {

    @ApiProperty()
    name: string;

    @ApiProperty()
    animal: string;

    @ApiProperty()
    breed: string;

    @ApiProperty()
    userId: number;
}
