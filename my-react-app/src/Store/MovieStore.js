import {configureStore} from "@reduxjs/toolkit"
import MovieSlice from "./MovieSlice";
import userSlice from "./userSlice";
let MovieStore=configureStore({

    reducer:{
        user:userSlice,
        movie:MovieSlice
        
    }


})


export default MovieStore;