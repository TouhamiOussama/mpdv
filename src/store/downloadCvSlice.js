import { createSlice } from "@reduxjs/toolkit";

let initialState = {

};
let downloadCvSlice = createSlice({
    name: "download",
    initialState,
    reducers: {
        handleDownloadCv: (state, action) => {
            const link = document.createElement("a");
            link.href = "/files/cv.pdf"; 
            link.download = "cv.pdf";
            link.click();
        }
    }
})

export let  { handleDownloadCv } = downloadCvSlice.actions;
export default downloadCvSlice.reducer;     