import React, { useEffect, useState } from 'react'
import { options } from '../Constants/Constant';



const Browse = () => {

  let [movie,setMovie]=useState([])

  let fetchData=async()=>{

    try{
      let data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
      let response=await data.json()
      console.log(response.results);
      setMovie(response)

    }catch(error){
      console.log(error);

    }

  }
  useEffect(()=>{
    fetchData()

  },[])
  return (
    <></>
  )
}

export default Browse