import React, { useContext } from "react";
import ProductAside from "./ProductAside";
import CartTable from "./CartTable";
import Context from "@/context/context";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FaHome } from "react-icons/fa";

const CartLayout = () => {
    const {
        state: { cart },
        dispatch,
    } = useContext(Context);

    return (
        <>
            {cart.length > 0 ? (
                <section className="w-full flex flex-wrap">
                    <div className="container mx-auto my-5">
                        <CartTable />
                    </div>
                </section>
            ) : (
                <div className="flex flex-col rounded-lg h-[400px] justify-center">
                    <div className="p-16 min-w-full align-middle h-32 flex flex-col justify-center items-center space-y-5">
                        <h1 className="text-4xl font-bold underline">CartIs Empty</h1>
                        <Link to={"/"}>
                            <Button variant="default" className="flex gap-2 font-bold">
                                <FaHome /> Back To Home
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartLayout;
