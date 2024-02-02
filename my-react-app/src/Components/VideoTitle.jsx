import React from 'react'

function VideoTitle({ title, overview }) {
  return (
    <div className='pt-[20%] px-5  absolute aspect-video w-6/12'>
      <h2 className='text-4xl  text-black '>{title}</h2>
      <p className='mt-2 text-1xl text-black'>{overview}</p>
      <div className='mt-3'>
        <button className='bg-[#fdfbfb7b] px-3 py-1 rounded-sm capitalize text-white shadow-lg'>▶️ Play</button>

        <button className='bg-[#fdfbfb7b] px-3 py-1 rounded-sm mx-3 capitalize  text-white shadow-lg' >video Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

