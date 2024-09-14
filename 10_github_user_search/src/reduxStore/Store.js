import { configureStore } from "@reduxjs/toolkit";
import GithubSliceReducer from "./GithubSlice";

const store = configureStore({
    reducer: {
        github: GithubSliceReducer,
    },
});
export default store;
