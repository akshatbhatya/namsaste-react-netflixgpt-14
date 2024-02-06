import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ Movies }) {
  return (
    <div className=' bg-black pt-5'>

      <div className='mx-5 mt-7'>

        <h2 className='mb-7 text-white'>Now Playing</h2>

        <div className='flex flex-wrap gap-5 justify-center'>

          {
            Movies.map((item, i) => {
              return <MovieCard key={i} imagePath={item} />
            })
          }

        </div>



      </div>
    </div>
  )
}

export default MovieList
