import { Module } from '@nestjs/common';
import { AppController } from './modules/app/app.controller';
import { AppService } from './modules/app/app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './shared/database/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}