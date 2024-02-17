import GetData from "../Hooks/useFetchMovies"
import MainContainer from "./MainContainer"
import VideoTitle from "./VideoTitle"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
  GetData()

  return (
    <>
    <MainContainer/>
    <SecondaryContainer/>
    
   
    </>
  )
}

export default Browse