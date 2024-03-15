import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { getNowPlaying, getPopularMovies } from "@/api/api";
import { useState, useEffect } from "react";
import { FeaturedMovie } from "@/components/FeaturedMovie";
import { ListMovies } from "@/components/ListMovies";
import { IMAGE_URL } from "@/models/constants/constants";
import { Movie } from "@/models/interfaces/movie";
import { SkeletonImage } from "@/components/skeleton/skeletonImage";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);

  /**
   * Este useEffect se encarga de obtener las películas populares y la película destacada
   * @returns void
   * @param {void}
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const nowPlaying = await getNowPlaying();
        const popular = await getPopularMovies();
        setFeaturedMovie(nowPlaying[1]);
        setPopularMovies(popular);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    setTimeout(() => {
      setShowSkeleton(false);
      fetchData();
    }, 2000);
  }, []);

  return (
    <main className={`${bebasNeue.className}`}>
      <section className="max-h-full w-full relative overflow-hidden bg-gradient lg:h-screen lg:bg-none">
        {showSkeleton && <SkeletonImage />}
        {featuredMovie && (
          <Image
            src={`${IMAGE_URL}${featuredMovie?.backdrop_path}`}
            alt={featuredMovie?.title || "Movie title"}
            fill
            className="h-screen w-full object-cover -z-10"
            loading="lazy"
          />
        )}
        )
        <section className="flex flex-col justify-between h-full w-full max-w-7xl mx-auto px-6 pt-6 pb-16 lg:py-4">
          <Navbar />
          <section className="flex flex-col h-full items-center gap-4 pt-32 lg:flex-row lg:pt-0">
            <FeaturedMovie featuredMovie={featuredMovie} />
            <ListMovies
              popularMovies={popularMovies}
              className={"hidden lg:flex"}
            />
          </section>
        </section>
      </section>
      <ListMovies
        className={"flex bg-secondary lg:hidden"}
        popularMovies={popularMovies}
      />
    </main>
  );
}
