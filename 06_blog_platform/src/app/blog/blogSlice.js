import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name: "blogs",
    initialState: {
        posts: [],
    },
    reducers: {
        addNewBlog: (state, action) => {
            state.posts.push(action.payload);
        },
        removeBlog: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },
    },
});
export const { addNewBlog,removeBlog } = blogSlice.actions;
export default blogSlice.reducer;
