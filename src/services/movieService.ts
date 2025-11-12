import axios from "axios";
import { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesParams {
  query: string;
  page?: number;
}

interface TMDBResponse {
  results: Movie[];
}

export const fetchMovies = async ({
  query,
  page = 1,
}: FetchMoviesParams): Promise<Movie[]> => {
  const response = await axios.get<TMDBResponse>(API_URL, {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.data.results;
};
