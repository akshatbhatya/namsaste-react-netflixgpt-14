import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='pt-40 px-5 w-4/12'>
      <h2 className='text-3xl'>{title}</h2>
      <p className='mt-2'>{overview}</p>
      <div className='mt-3'>
      <button className='bg-slate-300 px-3 py-1 rounded-sm'>Play</button>
   
      <button className='bg-slate-300 px-3 py-1 rounded-sm mx-3' >video Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
