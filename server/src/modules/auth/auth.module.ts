import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../../shared/database/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AUTH_CONFIG } from '../../common/constants';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: AUTH_CONFIG.JWT_SECRET,
      signOptions: { expiresIn: AUTH_CONFIG.JWT_EXPIRES_IN },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}