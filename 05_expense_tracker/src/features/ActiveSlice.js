import { createSlice } from "@reduxjs/toolkit";

export const ActiveSlice = createSlice({
    name: "active",
    initialState: {
        value: "add",
    },
    reducers: {
        changeState: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeState } = ActiveSlice.actions;

export default ActiveSlice.reducer;
