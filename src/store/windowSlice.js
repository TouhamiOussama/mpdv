import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    activeWindow: 1
};

let windowSlice = createSlice({
    name: "window",
    initialState,
    reducers:{
        openWindow: (state,action) => {
            state.activeWindow = action.payload
        },
        closeWindow: (state,action) => {
            state.activeWindow = undefined
        },
        
    }
})


export let { openWindow,closeWindow } = windowSlice.actions; 
export default windowSlice.reducer;