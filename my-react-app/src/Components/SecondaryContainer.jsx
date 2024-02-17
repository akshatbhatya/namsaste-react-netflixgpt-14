import React from 'react'
import MovieList from './MovieList'
import { useSelector } from "react-redux"

function SecondaryContainer() {

  let MovieData = useSelector(store => store.movie.movies);

  if (!MovieData) return
  return (
    <>
      <div className=' bg-black'>

        <div className='relative -top-80'>


        <MovieList Movies={MovieData} title={"Now Playing"} />
        <MovieList Movies={MovieData} title={"Trending"} />
        <MovieList Movies={MovieData} title={"New Releases"} />
        <MovieList Movies={MovieData} title={"TOp Rated"} />
        </div>
      </div>

    </>
  )
}

export default SecondaryContainer
