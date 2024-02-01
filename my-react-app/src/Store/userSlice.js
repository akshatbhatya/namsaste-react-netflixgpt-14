import { createSlice } from "@reduxjs/toolkit";

let initialState=[]

let userSlice=createSlice(
    {
        name:"user",
        initialState,
        reducers:{
                addUser:(state,action)=>{
                    
                    state.push(action.payload)
                    
                },
                removeUser:()=>{
                    return initialState
                    
                }
            }
        }
        

    
)

export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;