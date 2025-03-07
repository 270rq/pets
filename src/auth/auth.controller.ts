import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {constructor(private readonly authService: AuthService){}

@UsePipes(new ValidationPipe())
@HttpCode(200)
@Post('register')
async register(@Body() data: AuthDto){
    return this.authService.register(data);
}

@UsePipes(new ValidationPipe())
@HttpCode(200)
@Post('login')
async login(@Body() data: AuthDto){
    return this.authService.login(data);
}
}
