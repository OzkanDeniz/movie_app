import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios
      .get(FEATURED_API)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return <MovieContext.Provider value={null}>{children}</MovieContext.Provider>;
};

export default MovieProvider;
