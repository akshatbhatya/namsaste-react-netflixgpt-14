import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMoviesTrailer } from '../Store/MovieSlice';
import { options } from '../Constants/Constant';

function useMoviesTrailer(videoId) {

    let dispatch = useDispatch()
    
    let fetchData = async () => {
        let data = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`, options);
        let response = await data.json()
        let filterData = response?.results.filter((video) => video.type
            === "Trailer")
        let trailer = filterData.length ? filterData : response?.results[0]
        dispatch(addMoviesTrailer(trailer))
    }
    useEffect(() => {
        fetchData()
    },[])
    
}

export default useMoviesTrailer
