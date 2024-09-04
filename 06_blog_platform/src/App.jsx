import React from "react";
import { AddBlog, BlogList, Header } from "./components";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
    const active = useSelector((state) => state.activestate.current);

    return (
        <>
            <div className="bg-gray-500 w-screen h-screen overflow-scroll">
                <Header />
                <div className="container mx-auto mt-4">{active === "list" ? <BlogList /> : <AddBlog />}</div>
            </div>
            <ToastContainer />
        </>
    );
};

export default App;
