import { useSelector } from 'react-redux';
import useMoviesTrailer from '../Hooks/useMoviesTrailer';

function VideoBackground({ videoId }) {

    useMoviesTrailer(videoId)
    let trailerData = useSelector(state => state.movie.movieTrailer)
    if (!trailerData) return
    
    return (
        <>

            <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/UGc5Tzz19UY?si=" + trailerData.key} title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>

            </iframe>

        </>
    )
}

export default VideoBackground
