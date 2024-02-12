import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name:"user",
        initialState:null,
        reducers :{
            addUserAction : (state,action)=>
            {
            return action.payload;
            },
            removeUserAction: (state,action)=>
            {
                return null;
            }

        }
    }
)
export const {addUserAction,removeUserAction} = userSlice.actions;
export default userSlice.reducer;