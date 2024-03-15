"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MovieHome } from "@/models/interfaces/movie";
import { FILTERS_ENUM, IMAGE_URL } from "@/models/constants/constants";

export const FilmCard = ({
  movie,
  selectedFilter,
  index,
}: {
  movie: MovieHome;
  selectedFilter: string;
  index: number;
}) => {
  const [isMovieHovered, setMovieHovered] = useState(false);

  /**
   *  Handle movie hover
   * @param value
   */
  const handleMovieHover = (value: boolean) => {
    setMovieHovered(value);
  };

  /**
   *  Average rating fixed
   * @param rating
   * @returns  average rating
   */
  const averageRatingFix = (rating: number | undefined): string => {
    if (rating === undefined || rating === null) {
      return "";
    }

    return rating.toString().length > 1
      ? rating.toString().slice(0, 3)
      : rating.toString();
  };

  /**
   *  Show movie year fixed
   * @param date
   * @returns  movie year
   */
  const showMovieYear = (date: string) => {
    return date.length > 4 ? date.split("-")[0] : date;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
        className={`flex flex-col justify-center h-44 w-80 gap-4 ${
          isMovieHovered
            ? "bg-black cursor-pointer"
            : "bg-gradient-to-b from-neutral-100 via-gray-900 to-black"
        } rounded-lg lg:w-56 lg:h-36 lg:min-h-[9rem] relative`}
        onMouseOver={() => handleMovieHover(true)}
        onMouseOut={() => handleMovieHover(false)}
      >
        <Image
          src={
            selectedFilter === FILTERS_ENUM.MY_MOVIES
              ? movie?.backdrop_path
              : `${IMAGE_URL}${movie?.backdrop_path}`
          }
          alt={movie?.title || "Movie title"}
          priority
          width={220}
          height={120}
          sizes="100vw"
          className="rounded-lg opacity-60 absolute top-0 left-0 w-full h-full object-cover"
        />
        {isMovieHovered ? (
          <div className="flex flex-col justify-end h-full relative gap-4 pb-2  ">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex  justify-start items-center text-center gap-4 pl-3"
            >
              <div className="w-8 h-8 relative border-2 border-white rounded-full bg-gray-400/50 hover:bg-primary hover:border-black">
                {isMovieHovered ? (
                  <Image
                    src="/icons/playfill.svg"
                    alt="play movie"
                    width={14}
                    height={14}
                    className="w-auto h-auto relative top-[30%] left-[35%]  hover:flex-col"
                  />
                ) : (
                  <Image
                    src="/icons/play.svg"
                    alt="play movie"
                    width={14}
                    height={14}
                    className="w-auto h-auto relative top-[30%] left-[30%]  hover:flex-col"
                  />
                )}
              </div>
              <h3 className="max-w-[9rem]">{movie?.title}</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center px-3"
            >
              <div className="flex flex-row gap-2">
                <Image
                  src="/icons/star.svg"
                  alt="movie rating"
                  width={14}
                  height={14}
                  className="w-auto h-auto relative"
                />
                <h3>
                  {movie?.vote_average.toString().length > 1
                    ? averageRatingFix(movie?.vote_average)
                    : movie?.vote_average}
                </h3>
              </div>

              <h3>{showMovieYear(movie?.release_date)}</h3>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center items-center text-center gap-4"
          >
            <div
              className="w-10 h-10 relative border-2 border-white rounded-full bg-gray-900/50 hover:bg-primary
            hover:border-black"
            >
              <Image
                src="/icons/play.svg"
                alt="play movie"
                width={40}
                height={40}
                className="w-auto h-auto relative top-[30%] left-[35%] hover:border-black"
              />
            </div>
            <h3 className="relative">{movie?.title}</h3>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
