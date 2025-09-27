# Subastik - Plataforma de Subastas en Tiempo Real

<p align="center">
<a href="https://github.com/R4F405/subastik/releases"><img src="https://img.shields.io/badge/Version-v0.0.1-blue" alt="Version 0.0.1"></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-v5.7.3-blue" alt="TypeScript v5.7.3"></a>
<a href="https://react.dev/"><img src="https://img.shields.io/badge/React-v18.2.0-cyan" alt="React v18.2.0"></a>
<a href="https://nestjs.com/"><img src="https://img.shields.io/badge/NestJS-v11.0.1-red" alt="NestJS v11.0.1"></a>
<a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-v7.1.6-yellow" alt="Vite v7.1.6"></a>
<a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma-v6.16.2-2D3748" alt="Prisma v6.16.2"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey" alt="License: CC BY-NC-SA 4.0"></a>
<a href="https://deepwiki.com/R4F405/subastik"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</p>

¡Bienvenido a Subastik! Este es el repositorio principal de una aplicación de subastas en tiempo real, construida con un stack tecnológico moderno y robusto. El proyecto está dividido en dos partes principales: un backend (API) y un frontend (cliente).

## 🚀 Stack Tecnológico

Este proyecto utiliza un conjunto de tecnologías modernas para garantizar un desarrollo escalable, mantenible y eficiente.

### Backend (`/server`)

* **Framework**: [NestJS](https://nestjs.com/) v11.0.1 - Un framework de Node.js progresivo para construir aplicaciones eficientes y escalables.
* **Lenguaje**: TypeScript v5.7.3
* **Base de Datos**: [PostgreSQL](https://www.postgresql.org/) - Un potente sistema de base de datos relacional de código abierto.
* **ORM**: [Prisma](https://www.prisma.io/) v6.16.2 - ORM de nueva generación para Node.js y TypeScript.
* **Validación**: class-validator y class-transformer para validación de DTOs.
* **Encriptación**: bcrypt para el hash de contraseñas.
* **Testing**: Jest para pruebas unitarias y e2e.

### Frontend (`/client`)

* **Framework**: [React](https://reactjs.org/) v18.2.0 con [Vite](https://vitejs.dev/) v7.1.6 - Una librería de JavaScript para construir interfaces de usuario, potenciada por una herramienta de desarrollo ultrarrápida.
* **Lenguaje**: TypeScript v5.8.3
* **Estilos**: [Tailwind CSS](https://tailwindcss.com/) v3.3 - Un framework de CSS "utility-first" para un diseño rápido y personalizado.
* **Gestión de Estado**: React Context API para autenticación.
* **Enrutamiento**: React Router v7.9.1.
* **HTTP Client**: Axios v1.12.2 para comunicación con la API.
* **Testing**: Vitest v1.4.0 con Testing Library para pruebas de componentes.

---

## 📋 Prerrequisitos

Antes de empezar, asegúrate de tener instalado el siguiente software en tu máquina:

* [Node.js](https://nodejs.org/) (versión 20.11 o superior recomendada)
* [npm](https://www.npmjs.com/) (normalmente se instala con Node.js)
* [Git](https://git-scm.com/)
* [PostgreSQL](https://www.postgresql.org/download/) (Base de Datos)
* [pgAdmin](https://www.pgadmin.org/download/) (Cliente gráfico para gestionar PostgreSQL)

---

## 🛠️ Guía de Instalación y Puesta en Marcha

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno de desarrollo local.

### 1. Clonar el Repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/R4F405/subastik.git
cd subastik
```

### 2. Configurar la Base de Datos

Antes de levantar el backend, necesitas crear la base de datos que la aplicación utilizará.

1.  Abre **pgAdmin**.
2.  Conéctate a tu servidor local de PostgreSQL.
3.  Haz clic derecho en `Databases` -> `Create` -> `Database...`.
4.  Nombra la base de datos `subastik` y haz clic en `Save`.

### 3. Configurar el Backend (`/server`)

Ahora, vamos a configurar y arrancar la API.

1.  **Navega al directorio del servidor:**
    ```bash
    cd server
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura las variables de entorno:**
    Copia el archivo de ejemplo `.env.example` para crear tu propio archivo de configuración `.env`.
    ```bash
    cp .env.example .env
    ```
    Abre el nuevo archivo `.env` y **reemplaza `"tu_contraseña"`** con la contraseña que estableciste para el usuario `postgres` durante la instalación de PostgreSQL.
    ```env
    # Contenido de server/.env
    DATABASE_URL="postgresql://postgres:tu_contraseña@localhost:5432/subastik"
    ```

4.  **Ejecuta la migración de la base de datos:**
    Este comando creará todas las tablas necesarias en tu base de datos `subastik` basándose en el esquema de Prisma.
    ```bash
    npx prisma migrate dev
    ```

5.  **Genera el cliente de Prisma:**
    ```bash
    npx prisma generate
    ```

### 4. Configurar el Frontend (`/client`)

Finalmente, configura la aplicación de React.

1.  **Navega al directorio del cliente** (desde la raíz del proyecto):
    ```bash
    cd client
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configuración opcional de variables de entorno:**
    El cliente puede funcionar con la configuración por defecto, pero si necesitas personalizar la URL de la API, puedes crear un archivo `.env.local`:
    ```env
    # Opcional: Solo si quieres cambiar la URL de la API
    VITE_API_BASE_URL=http://localhost:3000
    ```

---

## ▶️ Ejecutar la Aplicación

Para trabajar en el proyecto, necesitarás tener dos terminales abiertas: una para el backend y otra para el frontend.

1.  **Iniciar el Backend:**
    En una terminal, dentro de la carpeta `/server`, ejecuta:
    ```bash
    npm run start:dev
    ```
    La API estará escuchando en `http://localhost:3000`.

2.  **Iniciar el Frontend:**
    En una segunda terminal, dentro de la carpeta `/client`, ejecuta:
    ```bash
    npm run dev
    ```
    La aplicación de React estará disponible en `http://localhost:5173` (o el puerto que indique la terminal).

¡Y listo! Abre `http://localhost:5173` en tu navegador y deberías ver la aplicación funcionando.

---

## 📜 Scripts Disponibles

Aquí hay una lista de los comandos más útiles para cada parte del proyecto.

### Backend (`/server`)

* `npm run start:dev`: Inicia el servidor en modo de desarrollo con recarga automática.
* `npm run build`: Compila el proyecto para producción.
* `npm run start:prod`: Inicia el servidor en modo de producción (requiere `build` previo).
* `npm test`: Ejecuta las pruebas unitarias.
* `npm run test:e2e`: Ejecuta las pruebas de integración end-to-end.
* `npm run test:cov`: Ejecuta las pruebas con reporte de cobertura.
* `npm run lint`: Ejecuta el linter para revisar la calidad del código.
* `npm run format`: Formatea el código usando Prettier.
* `npx prisma studio`: Abre una interfaz web para visualizar y editar los datos de tu base de datos.
* `npx prisma migrate dev`: Ejecuta las migraciones de base de datos en desarrollo.

### Frontend (`/client`)

* `npm run dev`: Inicia el servidor de desarrollo de Vite.
* `npm run build`: Compila la aplicación para producción.
* `npm run lint`: Ejecuta el linter para revisar la calidad del código.
* `npm run preview`: Previsualiza la build de producción localmente.
* `npm test`: Ejecuta las pruebas usando Vitest.

---

## 📁 Arquitectura del Proyecto

### Estructura del Backend (`/server`)

```
server/
├── src/
│   ├── modules/           # Módulos de la aplicación
│   │   ├── app/          # Módulo principal
│   │   └── auth/         # Módulo de autenticación
│   ├── shared/           # Recursos compartidos
│   │   └── database/     # Configuración de Prisma
│   └── common/           # Utilidades comunes
│       ├── constants/    # Constantes globales
│       ├── interfaces/   # Interfaces TypeScript
│       └── types/        # Tipos TypeScript
├── prisma/              # Esquema y migraciones de base de datos
└── test/                # Tests e2e y unitarios
```

### Estructura del Frontend (`/client`)

```
client/
├── src/
│   ├── components/      # Componentes React
│   │   ├── auth/       # Componentes de autenticación
│   │   └── shared/     # Componentes reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── hooks/          # Custom hooks
│   ├── context/        # Contextos de React
│   ├── api/            # Servicios de API
│   ├── types/          # Tipos TypeScript
│   ├── utils/          # Utilidades
│   ├── constants/      # Constantes
│   └── test/           # Tests de componentes
└── public/             # Archivos estáticos
```

### Estado Actual del Desarrollo

**✅ Funcionalidades Implementadas:**
- Sistema de registro de usuarios completo (frontend + backend)
- Validación de formularios con mensajes de error
- Arquitectura modular escalable en ambos proyectos
- Sistema de autenticación con React Context (preparado para login)
- Base de datos con esquema completo de subastas
- Tests unitarios y e2e
- CI/CD con GitHub Actions
- Componentes reutilizables (Button, Input, AuthStatus)

**🚧 En Desarrollo:**
- Sistema de login de usuarios
- Dashboard de usuario
- Funcionalidades de subastas en tiempo real

**📋 Próximas Funcionalidades:**
- Gestión de productos y subastas
- Sistema de pujas en tiempo real
- WebSockets para comunicación en vivo
- Panel de administración

---

## 🧪 Tests Integrados

Este proyecto cuenta con tests integrados para garantizar la calidad y el correcto funcionamiento del código.

### Cómo Ejecutar los Tests

#### Backend (`/server`):
1. Navega al directorio del servidor:
   ```bash
   cd server
   ```
2. Ejecuta los tests unitarios:
   ```bash
   npm test
   ```
3. Ejecuta los tests de integración (end-to-end):
   ```bash
   npm run test:e2e
   ```

#### Frontend (`/client`):
1. Navega al directorio del cliente:
   ```bash
   cd client
   ```
2. Ejecuta los tests:
   ```bash
   npm test
   ```

### Importancia de los Tests

Es fundamental que se agreguen tests al añadir nuevo código para garantizar que las nuevas funcionalidades no introduzcan errores y que el sistema siga funcionando correctamente. Esto ayuda a mantener la calidad del proyecto y facilita el desarrollo colaborativo.

---

## 🧑‍💻 Desarrolladores

Este proyecto está siendo desarrollado y mantenido por:

* **R4F405** ([GitHub Profile](https://github.com/R4F405))
* **alpaso01** ([GitHub Profile](https://github.com/alpaso01))

## 📄 Licencia

Este proyecto está bajo la Licencia **Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional**.

Para ver una copia de esta licencia, visita [creativecommons.org/licenses/by-nc-sa/4.0/](http://creativecommons.org/licenses/by-nc-sa/4.0/). Puedes revisar el texto completo de la licencia en el archivo [LICENSE.md](LICENSE.md) de este repositorio.