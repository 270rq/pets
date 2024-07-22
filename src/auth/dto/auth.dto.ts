import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, MinLength } from "class-validator";

export class AuthDto {
    @ApiProperty({ example: 'user@example.com', description: 'The email address of the user' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'password123', description: 'The password of the user' })
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password: string;
}