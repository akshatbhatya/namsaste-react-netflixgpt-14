import { useSelector } from 'react-redux';
import useMoviesTrailer from '../Hooks/useMoviesTrailer';

function VideoBackground({ videoId }) {

    useMoviesTrailer(videoId)
    let trailerData = useSelector(state => state.movie?.movieTrailer)
    if (!trailerData) return

    return (
        <>

            <iframe
                className='w-[100%] aspect-video'
                src={"https://www.youtube.com/embed/UGc5Tzz19UY?si=" + trailerData?.key + "controls=0&mute=1&showinfo=0&rel=0&autoplay=1&loop=1"} title="YouTube video player"
                frameBorder="0"
                modestbranding="1"

                controls="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>

            </iframe>

        </>
    )
}

export default VideoBackground;
