import React, { useContext } from "react";
import BackDrop from "./BackDrop";
import ModelContainer from "./ModelContainer";
import { StateContext } from "../../context/StateProvider";
import { AnimatePresence } from "framer-motion";
const Model = () => {
    const { isOpen, handleModel } = useContext(StateContext);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <BackDrop />
                        <ModelContainer />
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Model;
