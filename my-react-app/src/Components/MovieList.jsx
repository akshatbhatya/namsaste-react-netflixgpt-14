import React from 'react'
import MovieCard from './MovieCard'

function MovieList({Movies}) {
  return (
    <div className='mx-5 mt-7 bg-black'>

    <h2 className='mb-7 text-white'>Now Playing</h2>
   
   <div className='flex flex-wrap gap-5 justify-center'>

   {
    Movies.map((item,i)=>{
      return <MovieCard key={i} imagePath={item}/>
    })
   }
    
   </div>
   
   
      
    </div>
  )
}

export default MovieList
