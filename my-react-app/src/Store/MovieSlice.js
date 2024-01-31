import { createSlice } from "@reduxjs/toolkit";

let initialState=[]

let MovieSlice=createSlice(
    {
        name:"movies",
        initialState,
        reducers:{
                addUser:(state,action)=>{
                    
                    state.push(action.payload)
                    
                },
                removeUser:()=>{
                    return null
                    
                }
            }
        }
        

    
)

export const {addUser,removeUser}=MovieSlice.actions;
export default MovieSlice.reducer;