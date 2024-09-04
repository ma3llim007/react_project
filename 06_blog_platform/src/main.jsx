import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import BlogStone, { BlogPersistor } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={BlogStone}>
            <PersistGate loading={null} persistor={BlogPersistor}>
                <App />
            </PersistGate>
        </Provider>
    </StrictMode>
);
