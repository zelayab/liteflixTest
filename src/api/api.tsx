import { API_NOW_PLAYING, API_POPULAR } from "@/models/constants/constants";
import { MovieFile } from "@/models/interfaces/modal";
import { Movie } from "@/models/interfaces/movie";
import { db } from "@/utils/firebase";
import { convertImage } from "@/utils/utils";
import axios from "axios";
import { collection, addDoc, getDocs } from "firebase/firestore";

/**
 * Get the movies that are currently playing
 * @returns Array of movies
 * */
export const getNowPlaying = async () => {
  try {
    const apiKey = process.env.API_KEY;
    const URL = `${API_NOW_PLAYING}movie/now_playing?api_key=${apiKey}`;
    const response = await axios.get(URL);
    const data = response.data;
    const movies = data.results.slice(0, 4);

    return movies;
  } catch (error) {
    console.error(
      "Error al obtener las películas que se están reproduciendo actualmente:",
      error
    );
    throw error;
  }
};

/**
 * Get the popular movies from the API and return the first 15
 * @returns Array of movies
 * */
export const getPopularMovies = async () => {
  try {
    const apiKey = process.env.API_KEY;
    const URL = `${API_POPULAR}movie/popular?api_key=${apiKey}`;
    const response = await axios.get(URL);
    const data = response.data;
    const movies = data.results.slice(0, 15);
    return movies;
  } catch (error) {
    console.error("Error al obtener las películas populares:", error);
    throw error;
  }
};

/**
 * Add a movie to the database
 * @param image - Image of the movie
 * @param title - Title of the movie
 * */
export const addMovie = async (image: any, title: string) => {
  try {
    const myMoviesCollection = collection(db, "myMovies");
    const movie: Movie = {
      id: Math.random().toString(36),
      backdrop_path: await convertImage(image as MovieFile),
      title: title,
      vote_average: (Math.random() * (10 - 1) + 1).toFixed(
        1
      ) as unknown as number,
      release_date: new Date().toISOString(),
    };

    // Agrega el documento directamente sin transacción
    await addDoc(myMoviesCollection, movie);
    console.log("Película agregada exitosamente!");
  } catch (error) {
    console.error("Error al agregar la película:", error);
  }
};

/**
 * Get the movies from the database
 * @returns Array of movies
 * */
export const getMyMovies = async () => {
  try {
    const myMoviesCollection = collection(db, "myMovies");
    const querySnapshot = await getDocs(myMoviesCollection);
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error al obtener los documentos:", error);
  }
};
