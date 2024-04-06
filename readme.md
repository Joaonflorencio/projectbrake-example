# CRUD DE TAREAS CON MONGOOSE

Esta es una aplicación sencilla en Node.js utilizando Express con mongoose para crear una API de tareas, donde podras crear, ver tareas, actulizar y borrarlas.

La estructura será la siguiente:
- config
  - config.js // Código de la conexión a la base de datos.
- env
  - .env // Aquí debe ir la MONGO_URI que nos da mongoDB Atlas
- models
  - Task.js // Aqui ira el modelo de la tarea con los campos title, completed y los timestamps.
- routes 
  - tasks.js // Aquí estarán todas las rutas
- index.js // Añadiremos nuestro servidor, conexión a la base de datos y uniremos el resto de la aplicación

## Endpoints de la API
- POST /create: Endpoint para crear una tarea.
- GET /: Endpoint para traer todas las tareas.
- GET /id/:_id: Endpoint para buscar tarea por id.
- PUT /markAsCompleted/:_id: Endpoint para marcar una tarea como completada.
- PUT /id/:_id: Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea. Es decir, que no me deje cambiar el campo  “completed” desde este endpoint, sino solo, el título.
- DELETE /id/:_id: Endpoint para eliminar una tarea.


1. Configuración
- Lo primero es inicializar nuestro proyecto de node
- Lo segundo es hacer npm install para instalar las dependencias de package.json
- Crearemos un servidor http con express en app.js

2. Paso a paso 
- Comenzaremos a manejar los módulos y solo introduciremos lo necesario en cada uno de ellos. No se debe requerir nada que no se vaya a usar.

3. POSTMAN
- Cada endpoint debe ser probado en postman y ver que funcione.

### Cosas a tener en cuenta:
- Tendremos abierto Atlas, postman, terminal, git... y un navegador con nuestra aplicación corriendo 

### paso a paso
Abrir todo lo que vamos a usra: Github, Atlas, Postman, terminal, visual Studio Code y un navegador para ver que todo funciona:
*** Desde ATLAS: ***
- Lo primero es crear la BBDD.
- Después crear el usuario
- Acceso a la red

*** Si no hemos clonado el proyecto y lo inicializamos desde cero: ***
- Creamos el repositorio en github
- Iniciaremos npm con `npm init -y`: Con esto inicializamos nuestro proyecto
- Instalamos dependencias:  `express, mongodb, mongoose, dotenv` (npm i express dotenv mongoose -E)
- git init para inicializar git en nuestro proyecto

*** Si hemos clonado el proyecto ***
- npm i para instalar las dependencias

*** Desde visual Studio: ***
- Crearemos nuestro `.gitignore`
- Creamos nuestro `.env`: Aquí irá nuestro puerto `PORT`y nuestra `MONGO_URI`
- Cremos un servidor y se prueba que funciona.
- Crearemos nuestro git: git init y nuestro repositorio en github.
- Haremos la configuración de nuestra BBDD en `config`
- Crearemos nuestro modelo de datos en `models`
- Crearemos las rutas: Hacemos la ruta, se prueba esa ruta. Creamos el controlador, se añade a la ruta el controlador  y desde postman se prueba. Comprobamos en ATLAS, y ya  podemos pasar a la siguiente.

Cada vez que se cumple un hito se tiene que subir a nuestro repositorio. Creamos el servidor, creador la BBDD, hacemos la primera ruta y funciona, ...

Aquí está el vídeo con todos los pasos
https://drive.google.com/file/d/1u959j2tFuBmUVGfQDd4uPIztWtsuaJwy/view?usp=sharing
