import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

function MainContainer() {
  let movies = useSelector((state) => state?.movie?.movies)
  if (!movies) return null
  let oneVideo = movies[0]

  let { title, overview, id } = oneVideo

  return (
    <div>
      <VideoTitle  title={title} overview={overview}  />
      <VideoBackground videoId={id} />
    </div>
  )
}

export default MainContainer
