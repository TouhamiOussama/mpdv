import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice";
import cursorMaskReducer from "./cursorMaskSlice";
import windowReducer from "./windowSlice";
import downloadCvReducer from "./downloadCvSlice";

export let store = configureStore({
    reducer:{
        showMenu: portfolioReducer,
        cursorMask: cursorMaskReducer,
        window: windowReducer,
        download: downloadCvReducer,
    }
});