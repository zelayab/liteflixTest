# LiteFlix

Proyecto basado en un test challenge de front-end de Litebox.
Es un proyecto creado en NextJs, y se utilizo framer motion para animaciones, también Zustand para crear un hook personalizado llamado useMovies que administra el estado relacionado con las películas.
Para nuestras API's usamos:

- themoviesdb API
- Firebase para nuestra propia API

## Environment Variables

Para usar el proyecto, se necesita agregar las siguietnes variables en tu archivo .env:

`API_KEY`

`ANOTHER_API_KEY`

- APIKEY : la api propia y personal de la api que utilizamos
- BASE_URL : la url de la página que tenemos

Es importante también tener el archivo que configura la configuración inicial de firebase

## Documentation

[Zustand](https://zustand-demo.pmnd.rs/)

[NextJs](https://nextjs.org/)

[TailwindCss](https://tailwindcss.com/)

[Axios](https://axios-http.com/es/docs/intro)

[Motion Framer](https://www.framer.com/motion/)

[ReactJs](https://react.dev/)

[Firebase](https://firebase.google.com/docs?hl=es)

## Color Reference

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| Primary Color   | ![#0a192f](https://via.placeholder.com/10/64EEBC?text=+) #64EEBC |
| Secondary Color | ![#f8f8f8](https://via.placeholder.com/10/242424?text=+) #242424 |
| Tertiary Color  | ![#00b48a](https://via.placeholder.com/10/DC493A?text=+) #DC493A |

## Tech Stack

**Client:** React, NextJs, TailwindCSS, MotionFrame, Axios,Zustand, Firebase.

## Features

- Menu responsive
- Poder agregar imagenes que representen unas peliculas y crear peliculas.
- Utilizar API de The Movie Database (TMDB)
- Las peliculas nuestras se guardan en la base de datos creada en Firebase
- Especificaciones según el test challenge
- Skeleton Card and Image del inicio

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

El proyecto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Aprende mas

Para aprender más acerca de NextJS:

- [Next.js Documentation](https://nextjs.org/docs) - Aprende acerca de NextJs, API.
- [Learn Next.js](https://nextjs.org/learn) - Next.js tutorial interactivo

## Deploy en Vercel

La manera más facil de deployar tu proyecto de Next.js es usar [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.Js.

Puedes ver [Next.js deployment documentation](https://nextjs.org/docs/deployment) para más detalles.

## Demo

[DEMO](https://liteflix-test-omega.vercel.app/)

## Authors

- [@zelayab](https://www.github.com/zelayab)
