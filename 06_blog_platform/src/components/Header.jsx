import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../app/activeState/stateSlice";

const Header = () => {
    const active = useSelector((state) => state.activestate.current);
    const dispatch = useDispatch();
    
    return (
        <>
            <header className="text-white body-font bg-gray-950 top-0 left-0 sticky right-0 z-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-bold items-center mb-4 md:mb-0">
                        <span onClick={() => dispatch(changeState("list"))} className="ml-3 text-xl cursor-pointer">
                            Blog Platform
                        </span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
                        <a onClick={() => dispatch(changeState("list"))} className={`mr-5 hover:text-white cursor-pointer ${active == "list" ? "text-white" : "text-gray-500"}`}>
                            Blog List
                        </a>
                        <a onClick={() => dispatch(changeState("add"))} className={`mr-5 hover:text-white cursor-pointer ${active == "add" ? "text-white" : "text-gray-500"}`}>
                            Blog Add
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
