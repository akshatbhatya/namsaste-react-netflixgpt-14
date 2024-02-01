import {configureStore} from "@reduxjs/toolkit"
import MovieSlice from "./userSlice";
let MovieStore=configureStore({

    reducer:{
        user:MovieSlice
        
    }


})


export default MovieStore;