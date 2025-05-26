# BACK-nodejs

Repositorio del backend desarrollado con Node.js y Express, usando archivos JSON como base de datos simulada.

## Requisitos

- Node.js (versión recomendada: `>=14.x`)
- Git

## Clonar el repositorio

```bash
git clone https://github.com/lucerohugo/BACK-nodejs.git
cd BACK-nodejs
```

## Instalación de dependencias

```bash
npm init -y
npm install express 
npm i nodemon
npm i fs
npm i path 
npm i cors
```

## Ejecutar el servidor

```bash
npm run dev
```

Esto levantará el servidor en este caso ,en el puerto 3000, `http://localhost:3000`.

## Estructura del proyecto

```
BACK-nodejs/
├── controllers/
│   └── products.controller.js
├── db/
│   └── productos.json
├── routes/
│   └── products.routes.js
├── index.js
└── package.json
```

## Endpoints disponibles

### Productos

- `GET /productos` — Listar productos
- `GET /productos/:id` — Obtener producto por ID
- `POST /productos` — Crear nuevo producto
- `PUT /productos/:id` — Actualizar producto
- `DELETE /productos/:id` — Eliminar producto

### Usuarios

- `GET /usuarios` — Listar usuarios
- `GET /usuarios/:id` — Obtener usuario por ID
- `POST /usuarios` — Crear nuevo usuario
- `PUT /usuarios/:id` — Actualizar usuario
- `DELETE /usuarios/:id` — Eliminar usuario

## Ejemplos de body JSON

### Producto

```json
{
  "id": 1,
  "nombre": "Teclado",
  "precio": 15000
}
```

### Usuario

```json
{
  "id": 1,
  "nombre": "Hugo",
  "contrasenia": "lucero123",
  "email": "hugolucero2025@gmail.com",
  "edad": 24
}
```

