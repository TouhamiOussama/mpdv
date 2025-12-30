import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    menuIsOpen: false,
};

let portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers:{
        showMenu: (state,action) => {
            state.menuIsOpen = !state.menuIsOpen;
        }
    }
})

export let { showMenu } = portfolioSlice.actions;
export default portfolioSlice.reducer;