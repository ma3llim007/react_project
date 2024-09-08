import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer />
        </>
    );
};

export default App;
