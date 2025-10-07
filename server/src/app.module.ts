import { Module } from '@nestjs/common';
import { AppController } from './modules/app/app.controller';
import { AppService } from './modules/app/app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './shared/database/prisma.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [AuthModule, PrismaModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}