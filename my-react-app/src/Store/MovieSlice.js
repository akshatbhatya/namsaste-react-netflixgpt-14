import { createSlice } from "@reduxjs/toolkit";


let initialState={
    movies:null
}

let moviveSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,action)=>{
            state.movies=action.payload

        }
    }
})

export const {addMovies}=moviveSlice.actions

export default moviveSlice.reducer