import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme.js";
import StateProvider from "./context/StateProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <StateProvider>
            <ThemeProvider theme={Theme}>
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </StateProvider>
    </StrictMode>
);
