import { createSlice } from "@reduxjs/toolkit";


let initialState={
    movies:null,
    movieTrailer:null
}

let movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,action)=>{
            state.movies=action.payload

        },
        addMoviesTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        }
    }
})

export const {addMovies,addMoviesTrailer}=movieSlice.actions

export default movieSlice.reducer