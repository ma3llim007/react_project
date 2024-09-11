import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer/taskSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

// Configuration For Persistence
const persistConfig = {
    key: "task_management",
    version: 1,
    storage,
};

// Create reducers
const rootReducer = combineReducers({
    task: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const storePersistor = persistStore(store);
export default store;
