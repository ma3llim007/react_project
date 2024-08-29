import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ExpenseStore, { ExpensePersistor } from "./app/ExpenseStore.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={ExpenseStore}>
            <PersistGate loading={null} persistor={ExpensePersistor}>
                <App />
            </PersistGate>
        </Provider>
    </StrictMode>
);
