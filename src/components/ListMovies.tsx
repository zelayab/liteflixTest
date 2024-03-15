"use client";
import { FILTERS_ENUM } from "@/models/constants/constants";
import { MovieHome, MovieListProps } from "@/models/interfaces/movie";

import { useEffect, useState } from "react";
import { FilmCard } from "./FilmCard";
import { FilterDropdown } from "./FilterDropdown";
import { useMovies } from "@/store/movies";
import { getMyMovies } from "@/api/api";
import { SkeletonCard } from "./skeleton/skeletonCard";

export const ListMovies = ({ popularMovies, className }: MovieListProps) => {
  const [selectedFilter, setSelectedFilter] = useState(
    FILTERS_ENUM.POPULAR_MOVIES
  );
  const myMovies = useMovies((state: any) => state.myMovies);
  const setMyMovies = useMovies((state: any) => state.setMyMovies);

  /**
   * Este useEffect se encarga de obtener las películas del usuario
   * y las guarda en el estado global
   * @returns void
   * @param {void}
   */
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMyMovies();
        setMyMovies(movies);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };
    fetchMovies();
  }, [popularMovies]);

  const movies: Record<string, MovieHome[]> = {
    [FILTERS_ENUM.POPULAR_MOVIES]: popularMovies,
    [FILTERS_ENUM.MY_MOVIES]: myMovies,
  };

  return (
    <div className="overflow-hidden lg:w-[27rem]">
      <div
        className={`flex flex-col justify-start items-center gap-8 overflow-y-auto overflow-x-hidden lg:h-[37rem] lg:w-[21rem] ${className}`}
      >
        <FilterDropdown
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        {movies && movies[selectedFilter]?.length > 0
          ? movies[selectedFilter].map((movie, index) => (
              <FilmCard
                key={`${movie.id}-${selectedFilter}`}
                movie={movie}
                selectedFilter={selectedFilter}
                index={index}
              />
            ))
          : Array.from({ length: 10 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
      </div>
    </div>
  );
};
