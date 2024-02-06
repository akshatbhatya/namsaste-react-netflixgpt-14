import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux"

function SecondaryContainer() {

  let MovieData=useSelector(store=>store.movie.movies);
  
  if(MovieData.length==0)return
  return (
    <>

    <MovieList Movies={MovieData} />
      
    </>
  )
}

export default SecondaryContainer
 