import { NestFactory } from '@nestjs/core';
 import { AppModule } from './app.module';
 import { ValidationPipe } from '@nestjs/common';

 async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   app.useGlobalPipes(new ValidationPipe({
     whitelist: true, // Elimina propiedades que no estén en el DTO
     forbidNonWhitelisted: true, // Lanza un error si hay propiedades no permitidas
   }));

   // Habilitar CORS para que el frontend pueda comunicarse
   app.enableCors();

   await app.listen(process.env.PORT ?? 3000);
 }
 bootstrap();