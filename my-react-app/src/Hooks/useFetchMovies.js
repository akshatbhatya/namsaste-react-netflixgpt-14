import { useDispatch } from "react-redux";
import { options } from "../Constants/Constant";
import { useEffect } from "react";
import { addMovies } from "../Store/MovieSlice";

function GetData(){
  let dispatch=useDispatch()


  useEffect(()=>{
    fetchData()

  },[])

  let fetchData=async()=>{
  

    try{
      let data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
      let response=await data.json()
      console.log(response.results);
      dispatch(addMovies(response.results)
      )
      

    }catch(error){
      console.log(error);

    }

  }
}
 
export default GetData