import { createSlice } from "@reduxjs/toolkit";

export const GithubSlice = createSlice({
    name: "github",
    initialState: {
        userList: [],
        userName: null,
        page: null,
        totalCount: 0,
        usersPerPage: 20,
        error: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.userList = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        updateTotalCount: (state, action) => {
            state.totalCount = action.payload;
        },
        updateUserName: (state, action) => {
            state.userName = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { addUser, setPage, updateTotalCount, updateUserName, setError } = GithubSlice.actions;

export default GithubSlice.reducer;
