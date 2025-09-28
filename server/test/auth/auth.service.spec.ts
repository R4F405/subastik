import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../../src/modules/auth/auth.service';
import { PrismaService } from '../../src/shared/database/prisma.service';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt');

const mockPrismaService = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
};

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    const registerDto = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    };

    it('debería crear un nuevo usuario y devolverlo sin la contraseña', async () => {
      const hashedPassword = 'hashedPassword';
      const user = {
        id: 'a-uuid',
        ...registerDto,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.user.findUnique.mockResolvedValue(null);
      mockPrismaService.user.create.mockResolvedValue(user);

      (bcrypt.hash as jest.Mock).mockResolvedValue(hashedPassword);

      const result = await service.register(registerDto);

      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: registerDto.email } });
      expect(bcrypt.hash).toHaveBeenCalledWith(registerDto.password, 10);
      expect(prisma.user.create).toHaveBeenCalledWith({
        data: {
          name: registerDto.name,
          email: registerDto.email,
          password: hashedPassword,
        },
      });

      expect(result).not.toHaveProperty('password');
      expect(result.email).toEqual(registerDto.email);
    });

    it('debería lanzar un ConflictException si el email ya existe', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue({ id: 'some-id' });

      await expect(service.register(registerDto)).rejects.toThrow(ConflictException);

      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: registerDto.email } });
      expect(prisma.user.create).not.toHaveBeenCalled();
    });
  });

  describe('login', () => {
    const loginDto = {
      email: 'test@example.com',
      password: 'password123',
    };
    
    const userInDb = {
      id: 'a-uuid',
      ...loginDto,
      name: 'Test User',
      password: 'hashedPassword',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    it('debería devolver un access_token y el usuario sin contraseña si las credenciales son válidas', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(userInDb);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const result = await service.login(loginDto);

      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: loginDto.email } });
      expect(bcrypt.compare).toHaveBeenCalledWith(loginDto.password, userInDb.password);
      expect(result).toHaveProperty('access_token');
      expect(result.user.email).toEqual(userInDb.email);
      expect(result.user).not.toHaveProperty('password');
    });

    it('debería lanzar un UnauthorizedException si el usuario no existe', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });

    it('debería lanzar un UnauthorizedException si la contraseña es inválida', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(userInDb);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });
  });
});