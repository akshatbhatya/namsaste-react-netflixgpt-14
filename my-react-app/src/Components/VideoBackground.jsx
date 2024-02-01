import React, { useEffect } from 'react'
import { options } from '../Constants/Constant';

function VideoBackground({ videoId }) {

    let fetchData = async () => {
        let data = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`, options);
        let response = await data.json()
        let filterData = response?.results.filter((video) => video.type
            === "Trailer")
        let trailer = filterData.length ? filterData : response?.results[0]
        console.log(trailer);

    }
    useEffect(() => {
        fetchData()
    })
    return (
        <>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UGc5Tzz19UY?si=KVoBeAPdOrq5aF0K" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>

            </iframe>

        </>
    )
}

export default VideoBackground
