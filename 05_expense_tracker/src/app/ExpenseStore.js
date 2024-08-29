import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ExpenseReducer from "../features/ExpenseSlice";
import ActiveReducer from "../features/ActiveSlice";

// Configuration for persistence
const persistConfig = {
    key: "root", // Key in localStorage where state will be saved
    version: 1, // Version of the persisted state
    storage, // Storage engine to use (localStorage by default)
    whitelist: ["expenses"], // Optional: only persist these reducers
};

// Creating Reducers
const reducers = combineReducers({
    expenses: ExpenseReducer,
    active: ActiveReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const ExpenseStore = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const ExpensePersistor = persistStore(ExpenseStore);
export default ExpenseStore;
