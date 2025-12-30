import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    defaultVariant: "default"
};

let cursorMaskSlice = createSlice({
    name: "cursorMask",
    initialState,
    reducers:{
        textEnter: (state,action) => {
            state.defaultVariant = "text"
        },
        textLeave: (state,action) => {
            state.defaultVariant = "default"
        }
    }
})


export let { textEnter,textLeave } = cursorMaskSlice.actions; 
export default cursorMaskSlice.reducer;