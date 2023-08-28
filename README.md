# Backend MoneyMind API

_Se trata de un Servicio Web de tipo RESTful creado con NodeJS y Express. Este WS proporciona un API para gestionar una base de datos mysql sobre un sistema de registro de transacciones._

_En la siguiente tabla se muestran todas las rutas (**endpoints**) del API RESTful:_

Verbo HTTP | Ruta | Descripción
--------: | :------- | :--------
<span style="color:yellow">POST</span> | /auth/registro | Registramos un usuario en el sistema.
<span style="color:yellow">POST</span> | /auth/login | Logueamos un usuario del sistema.
<span style="color:yellow">POST</span> | /cuenta | Crear una nueva cuenta perteneciente a un usuario.
<span style="color:red">DELETE</span> | /cuenta/\{id\} | Eliminamos una cuenta determinada.
<span style="color:yellow">POST</span> | /transaccion/\{id\} | Creamos una nueva transacción en la cuenta con id \{id\}.
<span style="color:green">GET</span> | /informe/\{id\}/semanal | Obtenemos el informe semanal de la cuenta \{id\} en una semana determinada.


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

_Igualmente se debe tener instalada **mysql** y asegurarnos que está lanzada. Para ello tendremos que instalar xampp en nuestro sistema y activar los servicios de apache y mysql..._

Se puede instalar xampp a través de este enlace: https://www.apachefriends.org/es/download.html

### Instalación 🔧

_En esta sección veremos cómo instalar y configurar el entorno de desarrollo para trabajar con el proyecto._

_En primer lugar, debemos clonar el proyecto desde nuestro repositorio._

```sh
git clone https://github.com/Ferxu01/MoneyMind-api.git
```

_Una vez clonado el repositorio, debemos instalar y actualizar todas las bibliotecas de código y dependencias del proyecto._

```sh
cd MoneyMind-api
npm i
```

_Para poner el proyecto en marcha, ejecutaremos el siguiente comando:_

```sh
npm start
```

## Pruebas con Postman 📯

_El archivo `crud.postman_collection.json` contiene una colección de pruebas para todos los **endpoints** del API del servicio._

_Para poder emplearlo desde **Postman**, bastará con importar el archivo y, si fuera necesario, modificar el puerto de escucha del servidor._

## Construido con 🛠️

* [express](https://expressjs.com/es/) - Infraestructura de aplicaciones web Node.js mí­nima y flexible que proporciona un conjunto sólido de caracterí­sticas para las aplicaciones web y móviles.
* [cors](https://www.npmjs.com/package/cors) - CORS es un paquete de node.js que ofrece un middleware de Express para ser usado para habilitar CORS con distintas opciones.
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Una biblioteca para encriptar las contraseñas.
* [mysql](https://www.npmjs.com/package/mysql) - Un driver de node.js para utilizar en base de datos mysql. Escrito en Javascript.
* [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta que ayuda a desarrollar aplicaciones basadas en node.js reiniciando automáticamente la aplicación de node cuando se detectan cambios de archivos en el directorio.
* [jwt-simple](https://www.npmjs.com/package/jwt-simple) - JWT (JSON Web Token) encode and decode module for node.js.
* [moment](https://www.npmjs.com/package/moment) - Una biblioteca de javascript para manipular y formatear fechas.
* [html-pdf](https://www.npmjs.com/package/html-pdf) - Una biblioteca para generar ficheros en formato pdf utilizando sintaxis html y javascript 
* [pug](https://www.npmjs.com/package/pug) - Motor de plantillas versátil para crear páginas dinámicas usando Node.js.
* [zod](https://www.npmjs.com/package/zod) - Herramienta para crear schemas y validar datos.

## Versionado 📌

En este repositorio se pueden encontrar la evolución del proyecto desde la estructura básica de un servicio, hasta un servicio completo con comunicación HTTP:

tag     | Descripción
------- | ------------------------------------------
v1.0.0 | Creación y configuración básica del servidor.
v2.0.0  | Implementación de base de datos mysql en la API.
v3.0.0  | Implementación del servicio AUTH (Registro y login de usuario)
v3.1.0  | Implementación del servicio de generación del informe en formato pdf.

## Autores ✒️

_Todos aquellos que ayudaron a levantar el proyecto desde sus inicios:_

* **Fernando Ortega** - _Documentación y desarrollo_ - [Ferxu01](https://github.com/ferxu01)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quiénes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia (Sin licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

Gracias por visitar nuestro proyecto. Espero que les guste el contenido que se está desarrollando. Próximamente se subirán nuevas actualizaciones al proyecto.