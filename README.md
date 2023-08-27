# Backend CRUD API REST

_Se trata de un Servicio Web de tipo RESTful concretamente creado con NodeJS y Express. Este WS proporciona un API CRUD para gestionar una base de datos MongoDB._

_En la siguiente tabla se muestran todas las rutas (**endpoints**) del API RESTful:_

Verbo HTTP | Ruta | Descripción
--------: | :------- | :--------
<span style="color:green">GET</span> | /api | Obtenemos todas las colecciones existentes en la DB.
<span style="color:green">GET</span> | /api/\{coleccion\} | Obtenemos todos los elementos de la tabla \{coleccion\}.
<span style="color:green">GET</span> | /api/\{coleccion\}/\{id\} | Obtenemos el elemento indicado en \{id\} de la tabla \{coleccion\}.
<span style="color:yellow">POST</span> | /api/\{coleccion\} | Creamos un nuevo elemento en la tabla \{coleccion\}.
<span style="color:blue">PUT</span> | /api/\{coleccion\}/\{id\} | Modificamos el elemento \{id\} de la tabla \{coleccion\}.
<span style="color:red">DELETE</span> | /api/\{coleccion\}/\{id\} | Eliminamos el elemento \{id\} de la tabla \{coleccion\}.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Ver **Deployment** para conocer cómo desplegar el proyecto.

### Pre-requisitos 📋

_Se debe tener instalado **Node JS** en el equipo de desarrollo. Las siguientes líneas muestran cómo hacerlo con líneas de comando para **Ubuntu 22.04**:_

```sh
sudo apt update
sudo apt install npm
```

Para instalar las dependencias haremos lo siguiente:
```sh
wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb
sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb
```

_Igualmente se debe tener instalada la DB **MongoDB** y asegurarnos que está lanzada..._

```sh
wget -qO - https://www.mongodb.org/statis/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org=4.4.15 mongodb-org-server=4.4.15 mongodb-org-shell=4.4.15 mongodb-org-mongos=4.4.15 mongodb-org-tools=4.4.15
sudo systemctl start mongod
```

### Instalación 🔧

_En esta sección veremos cómo instalar y configurar el entorno de desarrollo para trabajar con el proyecto._

_En primer lugar, debemos clonar el proyecto desde nuestro repositorio._

```sh
git clone https://fojo1@bitbucket.org/proyectosnode/api-rest.git
```

_Una vez clonado el repositorio, debemos instalar y actualizar todas las bibliotecas de código y dependencias del proyecto._

```sh
cd api-rest
npm i
```

_Para poner el proyecto en marcha, ejecutaremos el siguiente comando:_

```sh
npm start
```

## Pruebas con Postman 📯

_El archivo `crud.postman_collection.json` contiene una colección de pruebas para todos los **endpoints** del API del servicio._

_Para poder emplearlo desde **Postman**, bastará con importar el archivo y, si fuera necesario, modificar el puerto de escucha del servidor._

<!-- ## Ejecutando las pruebas ⚙️

_Explica cómo ejecutar las pruebas automatizadas para este sistema._

### Analice las pruebas end-to-end 🔩

_Explica qué verifican estas pruebas y por qué_

```
Proporciona un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica qué verifican estas pruebas y por qué_

```
Proporciona un ejemplo
``` -->

<!-- ## Despliegue 📦

_Agrega notas adicionales sobre cómo hacer deploy._ -->

## Construido con 🛠️

* [Express](https://expressjs.com/es/) - Infraestructura de aplicaciones web Node.js mí­nima y flexible que proporciona un conjunto sólido de caracterí­sticas para las aplicaciones web y móviles.
* [mongodb](https://www.mongodb.com/docs/drivers/node/current/) - official MongoDB Node.js driver. You can add the driver to your application to work with MongoDB in JavaScript.
* [mongojs](github.com/mongo-js/mongojs#readme) - official MongoDB Node.js driver. You can add the driver to your application to work with MongoDB in JavaScript.
* [cors](github.com/expressjs/cors#readme) - CORS es un paquete de node.js que ofrece un middleware de Express para ser usado para habilitar CORS con distintas opciones.
* [helmet](helmetjs.github.io/) - Helmet te ayuda con tus aplicaciones Express configurando varias cabeceras HTTP.
* [morgan](github.com/expressjs/morgan#readme) - HTTP request logger middleware for node.js.
* [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta que ayuda a desarrollar aplicaciones basadas en node.js reiniciando automáticamente la aplicación de node cuando se detectan cambios de archivos en el directorio.
* [jwt-simple](https://www.npmjs.com/package/jwt-simple) - JWT (JSON Web Token) encode and decode module for node.js.
* [moment](https://www.npmjs.com/package/moment) - A JavaScript date library for parsing, validating, manipulating, and formatting dates.

<!-- ## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/tu/tuProyecto) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki) -->

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://bitbucket.org/proyectosnode/api-rest/commits/).

En este repositorio se pueden encontrar la evolución del proyecto desde la estructura básica de un servicio, hasta un servicio CRUD completo con comunicación HTTPS:

tag     | Descripción
------- | ------------------------------------------
v1.0.25 | API Rest Hola Mundo.
v2.0.0  | API Rest CRUD (sin DB).
v3.0.0  | API Rest CRUD (con DB MongoDB).
v3.1.0  | API REST CRUD con MongoDB (CORS y auth).
v3.2.0  | API REST CRUD con MongoDB (https y helmet).
v4.0.0  | API REST CRUD con MongoDB y autenticación con JWT.

## Autores ✒️

_Todos aquellos que ayudaron a levantar el proyecto desde sus inicios:_

* **Fernando Ortega** - _Documentación y desarrollo_ - [Ferxu01](https://github.com/ferxu01)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quiénes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia (Sin licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

Gracias por visitar nuestro proyecto. Espero que les guste el contenido que se está desarrollando. Próximamente se subirán nuevas actualizaciones al proyecto.