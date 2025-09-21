import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module'; 
import { PrismaService } from '../../src/prisma/prisma.service';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    await app.init();

    prisma = app.get<PrismaService>(PrismaService);

    await prisma.user.deleteMany({});
  });

  afterAll(async () => {
    await prisma.user.deleteMany({});
    await app.close();
  });

  describe('/auth/register (POST)', () => {
    const validUser = {
      name: 'E2E Test User',
      email: 'e2e@test.com',
      password: 'password123',
    };

    it('debería registrar un usuario correctamente con datos válidos', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send(validUser)
        .expect(201)
        .then((res) => {
          expect(res.body).toBeDefined();
          expect(res.body.email).toEqual(validUser.email);
          expect(res.body.name).toEqual(validUser.name);
          expect(res.body.password).toBeUndefined();
        });
    });

    it('debería devolver un error 409 (Conflict) si el email ya está en uso', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send(validUser)
        .expect(409);
    });

    it('debería devolver un error 400 (Bad Request) si el email es inválido', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send({ ...validUser, email: 'invalid-email' })
        .expect(400);
    });

    it('debería devolver un error 400 (Bad Request) si la contraseña es muy corta', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send({ ...validUser, email: 'new@email.com', password: '123' })
        .expect(400);
    });
    
    it('debería devolver un error 400 (Bad Request) si el nombre está vacío', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send({ ...validUser, email: 'another@email.com', name: '' })
        .expect(400);
    });
  });
});