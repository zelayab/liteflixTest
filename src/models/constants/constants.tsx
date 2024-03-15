/* Archivo de constantes para la aplicación */

/* URL de la API */
const API_BASE_URL = process.env.BASE_URL;
export const API_NOW_PLAYING = `${API_BASE_URL}`;
export const API_POPULAR = `${API_BASE_URL}`;

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const FILTERS_ENUM = {
  POPULAR_MOVIES: "POPULARES",
  MY_MOVIES: "MIS PELICULAS",
};
