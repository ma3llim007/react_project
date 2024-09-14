import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Home, UserDetail } from "./pages";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reduxStore/Store.js";

const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="user-detail/:userId" element={<UserDetail />} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={routers} />
        </Provider>
    </StrictMode>
);
