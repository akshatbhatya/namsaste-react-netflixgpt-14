import { createSlice } from "@reduxjs/toolkit";


let initialState={
    movies:null
}

let movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,action)=>{
            state.movies=action.payload

        }
    }
})

export const {addMovies}=movieSlice.actions

export default movieSlice.reducer