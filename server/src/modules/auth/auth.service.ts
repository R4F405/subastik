import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const userExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new ConflictException('El email ya está en uso');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // No devolver la contraseña en la respuesta
    const { password: _, ...result } = user;
    return result;
  }
}