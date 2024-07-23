import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { IUser } from '../../interface/interface';

export class UserDto implements Partial<IUser> {
    @ApiProperty({ example: 'user@example.com', description: 'The email address of the user' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'password123', description: 'The password of the user' })
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password: string;
}
