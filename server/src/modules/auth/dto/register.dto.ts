import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

// Validación de datos para el registro de usuarios
export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'PASSWORD_MIN_LENGTH' })
  password: string;
}