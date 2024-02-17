import { useSelector } from "react-redux"
import GetData from "../Hooks/useFetchMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import GptSearch from "./GptSearch"

const Browse = () => {

  GetData()
  let toggleBtn = useSelector(state => state?.gptButton?.toogleSearch)


  return (
    <>
      {toggleBtn ? <GptSearch /> : <><MainContainer />
        <SecondaryContainer /></>}
    </>
  )
}

export default Browse