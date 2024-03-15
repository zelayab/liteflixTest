import { MovieFile } from "@/models/interfaces/modal";

export interface Movie {
  id: string;
  backdrop_path: Blob | string | ArrayBuffer | null;
  title: string;
  vote_average: number;
  release_date: string;
}

export interface MovieHome {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
  Ko = "ko",
}

export interface MovieListProps {
  popularMovies: MovieHome[];
  className: string;
}

export interface ImageType {
  Image: MovieFile;
}

export interface MovieFormProps {
  uploadState: string;
  progressBar: number;
  validForm: boolean;
  title: string;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
