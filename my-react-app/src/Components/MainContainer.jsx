import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';

function MainContainer() {
    let movies=useSelector((state)=>state?.movie?.movies)
    if(!movies)return null
    let oneVideo=movies[0]

    let {title,overview}=oneVideo
    console.log(title);

    console.log(movies,"movies from main container");
  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
    </div>
  )
}

export default MainContainer
