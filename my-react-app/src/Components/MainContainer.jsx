import React from 'react'
import { useSelector } from 'react-redux'

function MainContainer() {
    let movies=useSelector(((state)=>state?.movies?.movies))

    console.log(movies,"movies from main container");
  return (
    <div>
      
    </div>
  )
}

export default MainContainer
