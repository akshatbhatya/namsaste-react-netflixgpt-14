import React from 'react'
import MovieCard from './MovieCard'

function MovieList(MovieData) {
  return (
    <div className='mx-5 mt-7'>

    <h2 className='mb-7'>Now Playing</h2>

   <MovieCard  imagePath={MovieData.Movies}/>
      
    </div>
  )
}

export default MovieList
