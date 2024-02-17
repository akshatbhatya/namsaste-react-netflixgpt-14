import React from 'react'

function GptSearch() {
  return (
    <div className='flex justify-center items-center h-[100vh] gap-2 bg-black'>
      <input type="text" className="p-1" placeholder='Search Here....' />
      <button className='bg-green-600 text-white px-2 rounded-md py-1'> Search</button>
    </div>
  )
}

export default GptSearch
