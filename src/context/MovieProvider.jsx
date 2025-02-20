import React, { createContext, useContext } from 'react'

export const MovieContext = createContext()

export const useMovieContext = ()=>{
    return useContext(MovieContext)
}

const MovieProvider = () => {
  return (
    <div>
      
    </div>
  )
}

export default MovieProvider
