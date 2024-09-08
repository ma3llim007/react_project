import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Cart, Home } from "./pages";
import Provider from "./context/Provider.jsx";
import { ThemeProvider } from "./context/theme-provider.jsx";

const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<Cart />} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Provider>
                <RouterProvider router={routers} />
            </Provider>
        </ThemeProvider>
    </StrictMode>
);
