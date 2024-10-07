# Payana Challenge

## Instrucciones para correr el proyecto

Primero, dirigirse a la carpeta"db" y editar el archivo docker-compose.yaml, reemplazando los valores <user> y <password>. Una vez hecho esto, correr el siguiente comando en esa misma carpeta:

```
docker compose -p payana-challenge up -d
```

Luego, hay que dirigirnos a la carpeta "backend" y crear un documento .env utilizando el archivo .env.example o con los siguientes datos (reemplazando el <user> y el <password> por los mismos valores que pusieron en el archivo .yaml):
```
POSTGRES_DATABASE=postgres
POSTGRES_HOST=localhost
POSTGRES_PASSWORD=1234
POSTGRES_PORT= <password>
POSTGRES_USER= <user>
```

Una vez hecho esto, correr los siguientes comandos en esa misma carpeta:

```
npm i
npm run start
```

Y con eso el proyecto ya debería estar andando.
