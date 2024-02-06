import { IMAGE_PATH } from '../Constants/Constant'


function MovieCard({imagePath}) {
  if(!imagePath)return




  return (
    <div>

      

      <img src={IMAGE_PATH + imagePath?.poster_path} className='w-52 h-60'  alt="" />

    </div>
  )
}

export default MovieCard
