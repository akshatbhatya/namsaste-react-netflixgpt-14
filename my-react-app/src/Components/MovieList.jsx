import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ Movies ,title}) {
  return (
    <div className='  pt-5'>

      <div className='mx-5 mt-7'>

        <h2 className='mb-7 text-white'>{title}</h2>

        <div className='flex  justify-center flex-wrap gap-5'>

          {
            Movies.map((item, i) => {
              return <MovieCard key={i} title={"now Playing"} imagePath={item} />
            })
          }

        </div>



      </div>
    </div>
  )
}

export default MovieList
