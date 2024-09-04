import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stateReducer from "./activeState/stateSlice";
import blogReducer from "./blog/blogSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

// Configuration for Persistence
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

// Creating Reducers
const reducers = combineReducers({
    activestate: stateReducer,
    blogs: blogReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

const BlogStone = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const BlogPersistor = persistStore(BlogStone);
export default BlogStone;