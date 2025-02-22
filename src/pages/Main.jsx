import React, { useState } from "react";
import { useMovieContext } from "../context/MovieProvider";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, loading, getMovies } = useMovieContext();
  const handleSubmit=(e)=>{
e.preventDefault()
getMovies(SEARCH_API + searchTerm)

  }
  console.log(movies);
  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center p-2 ">
        <input
          type="search"
          className="w-80 h-8 rounded p-1 m-2 "
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-danger-bordered">Search</button>
      </form>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
