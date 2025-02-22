import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  return (
    <div className="movie">
      <img loading="lazy" src={poster_path ? IMG_API + poster_path : defaultImage} alt="movie-card" />
      <div>
        <h5>{title}</h5>
        <span>{vote_average.toFixed(1)}</span>
      </div>
      <div>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
