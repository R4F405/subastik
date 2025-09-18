# Subastik - Plataforma de Subastas en Tiempo Real

<p align="center">
<a href="https://github.com/R4F405/subastik/releases"><img src="https://img.shields.io/badge/Version-v0.0.0-blue" alt="Version 0.0.0"></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-v5.2.2-blue" alt="TypeScript v5.2.2"></a>
<a href="https://react.dev/"><img src="https://img.shields.io/badge/React-v18.3.1-cyan" alt="React v18.3.1"></a>
<a href="https://nestjs.com/"><img src="https://img.shields.io/badge/NestJS-v10.0.0-red" alt="NestJS v10.0.0"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey" alt="License: CC BY-NC-SA 4.0"></a>
<a href="https://deepwiki.com/R4F405/subastik"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</p>

¡Bienvenido a Subastik! Este es el repositorio principal de una aplicación de subastas en tiempo real, construida con un stack tecnológico moderno y robusto. El proyecto está dividido en dos partes principales: un backend (API) y un frontend (cliente).

## 🚀 Stack Tecnológico

Este proyecto utiliza un conjunto de tecnologías modernas para garantizar un desarrollo escalable, mantenible y eficiente.

### Backend (`/server`)

* **Framework**: [NestJS](https://nestjs.com/) - Un framework de Node.js progresivo para construir aplicaciones eficientes y escalables.
* **Lenguaje**: TypeScript
* **Base de Datos**: [PostgreSQL](https://www.postgresql.org/) - Un potente sistema de base de datos relacional de código abierto.
* **ORM**: [Prisma](https://www.prisma.io/) - ORM de nueva generación para Node.js y TypeScript.
* **Autenticación**: JWT (JSON Web Tokens) con Passport.js.
* **Tiempo Real**: WebSockets a través de `Socket.IO`.

### Frontend (`/client`)

* **Framework**: [React](https://reactjs.org/) con [Vite](https://vitejs.dev/) - Una librería de JavaScript para construir interfaces de usuario, potenciada por una herramienta de desarrollo ultrarrápida.
* **Lenguaje**: TypeScript
* **Estilos**: [Tailwind CSS](https://tailwindcss.com/) - Un framework de CSS "utility-first" para un diseño rápido y personalizado.
* **Gestión de Estado**: Zustand y TanStack Query (React Query).
* **Enrutamiento**: React Router.

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
* `npx prisma studio`: Abre una interfaz web para visualizar y editar los datos de tu base de datos.

### Frontend (`/client`)

* `npm run dev`: Inicia el servidor de desarrollo de Vite.
* `npm run build`: Compila la aplicación para producción.
* `npm run lint`: Ejecuta el linter para revisar la calidad del código.
* `npm run preview`: Previsualiza la build de producción localmente.

---

## 🧑‍💻 Desarrolladores

Este proyecto está siendo desarrollado y mantenido por:

* **R4F405** ([GitHub Profile](https://github.com/R4F405))
* **alpaso01** ([GitHub Profile](https://github.com/alpaso01))

## 📄 Licencia

Este proyecto está bajo la Licencia **Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional**.

Para ver una copia de esta licencia, visita [creativecommons.org/licenses/by-nc-sa/4.0/](http://creativecommons.org/licenses/by-nc-sa/4.0/). Puedes revisar el texto completo de la licencia en el archivo [LICENSE.md](LICENSE.md) de este repositorio.