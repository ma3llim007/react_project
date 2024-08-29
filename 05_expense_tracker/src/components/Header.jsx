import React from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../features/ActiveSlice";

const Header = () => {
    const active = useSelector((state) => state.active?.value);
    const dispatch = useDispatch();

    return (
        <>
            <header className="text-white body-font bg-gray-950 top-0 left-0 sticky right-0">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-bold items-center mb-4 md:mb-0 flex-row ">
                        <span onClick={() => dispatch(changeState("add"))} className="text-xl cursor-pointer flex justify-center items-center gap-2">
                            <FaMoneyCheckDollar className="text-white mt-[6px]" /> Expense Tracker
                        </span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
                        <a onClick={() => dispatch(changeState("add"))} className={`mr-5 hover:text-white cursor-pointer ${active == "add" ? "text-white" : "text-gray-500"}`}>
                            Add Expense
                        </a>
                        <a onClick={() => dispatch(changeState("list"))} className={`mr-5 hover:text-white cursor-pointer ${active == "list" ? "text-white" : "text-gray-500"}`}>
                            Expense List
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
