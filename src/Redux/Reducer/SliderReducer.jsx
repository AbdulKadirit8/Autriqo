import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSlider: true
};

const sliderSlice = createSlice({
    name: "slider",

    initialState,

    reducers: {

        setShowSlider(state, action) {
            state.showSlider = action.payload;
        }

    }

});

export const { setShowSlider } = sliderSlice.actions;

export default sliderSlice.reducer;