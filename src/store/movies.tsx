import { Movie } from "@/models/interfaces/movie";
import { create } from "zustand";

export const useMovies = create((set) => ({
  myMovies: [] as Movie[],
  setMyMovies: (movies: Movie[]) => set({ myMovies: movies }),
}));
