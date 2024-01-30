import {configureStore} from "@reduxjs/toolkit"
import MovieSlice from "./MovieSlice";
let MovieStore=configureStore({

    reducer:{
        movie:MovieSlice
        
    }


})


export default MovieStore;