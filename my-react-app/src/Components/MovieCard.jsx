import { IMAGE_PATH } from '../Constants/Constant'


function MovieCard({imagePath}) {
  if(!imagePath)return




  return (
    <div>

      <img src={IMAGE_PATH + imagePath[0].poster_path} className='w-52 h-60' alt="" />

    </div>
  )
}

export default MovieCard
