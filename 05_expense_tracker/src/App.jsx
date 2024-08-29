import React, { useState } from "react";
import { AddExpense, Header, ListExpense } from "./components";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
    const active = useSelector((state) => state.active?.value);

    return (
        <>
            <div className="bg-gray-500 w-screen h-screen select-none overflow-scroll">
                <Header />
                {active === "list" ? <ListExpense /> : <AddExpense />}
            </div>
            <ToastContainer />
        </>
    );
};

export default App;
