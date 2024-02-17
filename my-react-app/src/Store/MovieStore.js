import {configureStore} from "@reduxjs/toolkit"
import MovieSlice from "./MovieSlice";
import userSlice from "./userSlice";
import gptSearchSlice from "./gptSearchSlice";

let MovieStore=configureStore({

    reducer:{
        user:userSlice,
        movie:MovieSlice,
        gptButton:gptSearchSlice,
        
    }


})


export default MovieStore;