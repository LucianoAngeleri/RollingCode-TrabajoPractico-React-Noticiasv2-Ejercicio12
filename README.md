# Trabajo Práctico de React
## Ejercicio 12 - Web de Noticias V2
Este proyecto es una aplicación web desarrollada en **React** que consume la API provista por [https://newsdata.io/docs](https://newsdata.io/docs). La aplicación permite seleccionar diferentes categorías de noticias o sus países y mostrarlas en tarjetas.

## Autor

El proyecto fue creado por [César Luciano Angeleri](https://www.linkedin.com/in/cesar-luciano-angeleri/) como parte de un trabajo práctico de React para RollingCode School.
## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías y herramientas:

- React
- JavaScript
- HTML
- CSS
- Bootstrap
- Node.js
- npm

## Instalación

Sigue los siguientes pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio en tu máquina local o descarga el archivo ZIP.
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```
    npm install
    ```

## Ejecución

Después de haber instalado las dependencias, sigue los siguientes pasos para ejecutar el proyecto:

1. En la misma terminal, ejecuta el siguiente comando para iniciar la aplicación:

    ```
    npm run dev
    ```

2. Abre tu navegador web y ve a la dirección que aparece en la terminal, deberia ser algo como:
    ```
    http://localhost:5173/
    ```

## Funcionamiento de los componentes

### Encabezado

El componente `Encabezado` muestra un encabezado en la página con el título de la aplicación.

### Buscador

El componente `Buscador` contiene un `select` donde se pueden elegir diferentes **categorías** de noticias y tambien se puede seleccionar el **país** de origen de la noticia. Al seleccionar una categoría o un país, se realiza una consulta a la API y se muestran las noticias correspondientes en el componente `ListaNoticias`. **Nota: al configurar la url de la API con idioma español, puede que sólo aparezcan noticias de paises de habla hispana. Tener en cuenta eso para probar la web.*
### ListaNoticias

El componente `ListaNoticias` muestra una lista de noticias en cards individuales. Las noticias se obtienen de la API y se muestran de acuerdo a la categoría seleccionada en el `Buscador`. Cada tarjeta de noticia muestra el título, la categoría, la descripción, la imagen y un enlace a la noticia completa.

### Noticia

El componente `Noticia` muestra los detalles de una noticia en una card individual. Recibe los `props` del título, la categoría, la descripción, la imagen y el enlace de la noticia. La tarjeta muestra la información en secciones y proporciona un enlace para leer la noticia completa.

## Documentación de la API

Para obtener más información sobre la API utilizada en este proyecto, consulta la documentación oficial en [https://newsdata.io/docs](https://newsdata.io/docs).

