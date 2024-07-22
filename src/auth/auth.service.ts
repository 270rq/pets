import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: AuthDto) {
    const oldUser = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (oldUser) {
      throw new BadRequestException('User already exists');
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: { email: data.email, password: hashedPassword },
    });
    const tokens = await this.issueTokenPair(user.id);

    return { user, ...tokens };
  }

  async login(data: AuthDto) {
    const user = await this.validation(data);
    const tokens = await this.issueTokenPair(user.id);
    return { user, ...tokens };
  }

  async validation(data: AuthDto) {
    const user = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (!user) {
      throw new UnauthorizedException('User not found!');
    }
    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid password!');
    }
    return user;
  }

  async issueTokenPair(userId: number) {
    const data = { id: userId };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(data, { expiresIn: '1d' }),
      this.jwtService.signAsync(data, { expiresIn: '15d' }),
    ]);
    return { accessToken, refreshToken };
  }
}
