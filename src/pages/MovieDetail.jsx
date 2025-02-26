import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const {movieId} = useParams()
  console.log(movieId)
  return <div>MovieDetail</div>;
};

export default MovieDetail;
