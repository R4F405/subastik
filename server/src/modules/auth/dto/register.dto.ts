import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

// Validación de datos para el registro de usuarios
export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password: string;
}