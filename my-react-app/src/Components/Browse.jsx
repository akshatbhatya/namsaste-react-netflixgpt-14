import GetData from "../Hooks/useFetchMovies"
import MainContainer from "./MainContainer"
import VideoTitle from "./VideoTitle"

const Browse = () => {
  GetData()

  return (
    <>
    <MainContainer/>
    </>
  )
}

export default Browse