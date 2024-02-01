import React, { useEffect } from 'react'
import { options } from '../Constants/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { addMoviesTrailer } from "./../Store/MovieSlice"

function VideoBackground({ videoId }) {
    let dispatch = useDispatch()
    let trailerData = useSelector(state => state.movie.movieTrailer)

    
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
    if(!trailerData)return
    console.log(trailerData);
    return (
        <>

            <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/UGc5Tzz19UY?si="+trailerData.key} title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>

            </iframe>

        </>
    )
}

export default VideoBackground
