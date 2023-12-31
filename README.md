<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Requisitos

* Importante tener Node.js en su versión 16

## Descripcion

Para el proyecto se usa [Nest](https://github.com/nestjs/nest) framework TypeScript.

## Installation de paquetes

```bash
$ npm install
```

## Preparar entorno

### Configurar conexion de BD

Se debe crear un archivo .env en la raiz del proyecto

```bash
#Modificar conexión de BD, según la configuración del servidor postgres 
TYPEORM_HOST=localhost
TYPEORM_PORT=5432
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=123456
TYPEORM_DATABASE=das
TYPEORM_SYNCHRONIZE=false
```

### Ejecutar migracion de BD

```bash
#Actualizar migración de scripts (Cuando se realicen modificaciones a las entidades)
#npm run migrations:generate --name=${nombre del archivo}
$ npm run migrations:generate --name=init # cambiar init por el nombre

#Ejecutar los scripts de migraciones en la BD
$ npm run migrations:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```