import {createSlice} from "@reduxjs/toolkit"

let gptSearchSlice=createSlice({
    name:"gptSearchSlice",
    initialState:{
        toogleSearch:false
    },
    reducers:{
        setState:(state)=>{
            state.toogleSearch=!state.toogleSearch;


        }
    }
        

    
});

export let {setState} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;