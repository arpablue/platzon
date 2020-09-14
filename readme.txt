1) Create an accpunt in the:
    https://www.npmjs.com/
2) Register your develepor info for the project in a terminal, to execute the following commands:

    npm set init.author.name "Augusto Flores"
    npm set init.author.email "eng.aug.flores@gmail.com"
    npm set init.author.email "http//localhost"

3) Create the connection with you npm account, use your accoun / password // your site:

    npm login

Ex:
    Username: augusto.flores
    Password:
    Email: (this IS public) eng.aug.flores@gmail.com
    Logged in as augusto.flores on https://registry.npmjs.org/.


4) Para inicializar un pproyecto de NPM debemos ejecar:

    npm init

Durante tes proceso, se pediran datos como el nombre de, la version etc:

    package name: (platzon)
    version: (1.0.0) 0.1.0
    description: This is a translation language. This prj is to test npm projects.
    entry point: (index.js)
    test command:
    git repository: (https://github.com/arpablue/platzon.git) https://github.com/arpablue/platzon.git
    keywords: platzzon platzi funcdamentos javascript js
    license: (ISC) MIT

Se generará un json con la informacion ingresada, este archivo se le llama manifiesto ( manifest ).

5) Todos los paquetes o modulos deben de tener 2 archivos osn
    -license: Ir al sitio web https://opensource.org/licenses/MIT , bajar la licensia, ver el archivo de licensia.
    - Readme.md: que contendra toda la informacion de nuestro pproyecto, ver el archivo para mas detalle.

6) Empezar a imkpletar el modulo
    - src: Creamos una carpeta para la cracion de nuestro codigo.
    - lib: Otra carpeta para la distribucion de nuestro proyecto.

7) Para crear el codigo para ser publicado, hacemos usi de https://babeljs.io
    Se puede consultal en la pagina, la instalacion de babel: Setup > CLI
    En la carpeta de nuestro proyecto, debemos instalar babel, usando el siguiente comando

        npm install --save-dev @babel/core @babel/cli

    Esto hara que en nuestro archivo de 'package.json' se añadan las dependencias de babel:

          "devDependencies": {
                "@babel/cli": "^7.11.6", <- dependencia de bbel
                "@babel/core": "^7.11.6" <- dependencia de babel
            }

    En el mismo archivo se puede agregar la siguiente linea en la parte del script

            "scripts": {
                "build": "babel src -d lib", <- Agredando la dependencia de babel
                "test": "echo \"Error: no test specified\" && exit 1"
            },

    Esto permite que se ejecute el comando de babel, donde le decimos que lea el código de la carpeta 'src' y lo transpile a la carpeta 'lib'.
    Ejecutamos el siguiente comando

        npm run build

8) Creamos en el folder de nuestro projecto el archivo file 'babel.config.json'.
    En el interior del archivo poner el siguiente contenindo:

        {
            "presets": ["@babel/preset-env"]
        }
    
    Ejecutamos el siguiente codigo:

        npm install @babel/preset-env --save-dev

9) Contruimos nuestra aplicacion

    npm run build


===========================================
== Aniadiendo test cases
===========================================

1) para la escritura de los test se utilizan 2 librerias mocha y chai

    npm install --save-dev mocha chai


    - mocha para crearlos test
    - chai para los asserts

2) Creamos una carpeta llamada 'test' y dentro cfearemos un archivo llamado 'test.js'.
3) Una ves creado nuetro test, nos encragamos de aniadirlo en en nuestro package.json en la parte de script, la ejecucion de los tests:


  "scripts": {
    "build": "babel src -d lib",
    "test": "mocha" <- Esta es la parte que se encarga de ejecutar los tests
  },

  4) Posteriormente esto nos permite ejecutar los test desde la terminal
    
        npm test


