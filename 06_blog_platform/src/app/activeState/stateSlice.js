import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
    name: "activestate",
    initialState: {
        current: "list",
    },
    reducers: {
        changeState: (state, action) => {
            state.current = action.payload;
        },
    },
});

export const { changeState } = stateSlice.actions;
export default stateSlice.reducer;
