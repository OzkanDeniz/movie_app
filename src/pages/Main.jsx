import React from "react";
import { useMovieContext } from "../context/MovieProvider";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const { movies, loading } = useMovieContext();
  return <div>Main</div>;
};

export default Main;
