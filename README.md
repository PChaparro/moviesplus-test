# FrontEnd Developer Test

En este repositorio puedes encontrar mi solución al test para la posición de FrontEnd Developer en BeMaster Colombia 🇨🇴.

Para probar la aplicación en local, o en el despliegue realizado en Vercel, puedes utilizar las siguientes credenciales:

| Email             | Password    |
| ----------------- | ----------- |
| user@bemaster.com | password123 |

## Tecnologías Utilizadas 👾

React, TypeScript, React Context API, Tailwind CSS, Playwright, TanStack Router, TanStack Query.

## Mockups 🖼️

| ![Mockup de la vista principal en PC](https://github.com/PChaparro/moviesplus-test/assets/94259578/6e53687e-b501-4ec1-9019-d236cc07be4c) | ![Mockup de la vista principal en responsive](https://github.com/PChaparro/moviesplus-test/assets/94259578/4ea0ae9f-d5ec-431c-9bd9-977d05daa9ce) |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |

| ![Mockup de la vista de categoría en PC](https://github.com/PChaparro/moviesplus-test/assets/94259578/14d4201b-72c4-4a64-88af-2652234a6cd4) | ![Mockup de la vista de categoría en responsive](https://github.com/PChaparro/moviesplus-test/assets/94259578/7cc70240-f7e6-40b4-a8da-27dec2e8c6d2) |
| ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |

| ![Mockup de la vista de detalles de película en PC](https://github.com/PChaparro/moviesplus-test/assets/94259578/cbaafd43-d118-406d-877c-1c8e50e272b9) | ![Mockup de la vista de detalles de película en responsive](https://github.com/PChaparro/moviesplus-test/assets/94259578/65c68e88-2502-4f0c-b751-f819551e7c70) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Features ✨

### Requeridas 👀

- [x] Componente llamado 'Login' (implementando la lógica de validación de campos vacíos y caracteres permitidos para el campo de email)
- [x] Componente llamado 'Home' que contenga 5 cards, los cuales representan las categorías a las cuales ese usuario logueado tendrá acceso y un navbar básico.
- [x] Componente llamado contentCategory donde se presente, por filas, todo el contenido relacionado a la categoría seleccionada desde el componente 'Home'.
- [x] Un componente llamado contentDetails donde se visualice el contenido multimedia seleccionado desde el componente contentCategory y su respectiva sinopsis o resumen.

### Adicionales 🚀

- [x] Manejo de estados de carga por cada componente utilizando loading skeletons. ⏳
- [x] Estado global de películas favoritas utilizando Context API. ❤️
- [x] Paginación con scroll infinito para la vista de categoría. 📜
- [x] Uso de [custom hooks](./src//hooks/) para abstraer la lógica del fetching de datos. 🪝
- [x] Uso de [Playwright](https://playwright.dev/) para realizar pruebas end-to-end. 🧪
- [x] Uso de ramas y pull requests para la implementación de nuevas funcionalidades. :octocat:
- [x] GitHub Actions para la ejecución automatizada de linting, formatting y testing. 🤖
- [x] Caché del lado del cliente gracias a [TanStack Query](https://tanstack.com/query/latest) para mejorar la experiencia del usuario. 🚀

## Ejecutar en Local 🚀

Clona el repositorio:

```bash
git clone https://github.com/PChaparro/moviesplus-test
```

Entra al directorio del proyecto:

```bash
cd moviesplus-test
```

Instala las dependencias:

```bash
pnpm install
```

Ejecuta el proyecto:

```bash
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

## Ejecutar Pruebas 🧪

Para ejecutar las pruebas e2e, puedes utilizar el siguiente comando:

```bash
pnpm test:chromium
```

También puedes ejecutar las pruebas en modo ui para ver el navegador ejecutando las pruebas con el siguiente comando:

```bash
pnpm test:ui
```
