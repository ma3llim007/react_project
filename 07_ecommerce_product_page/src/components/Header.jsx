import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ModeToggle } from "./ModeToggle";
import Context from "../context/context";
import HeaderCard from "./HeaderCard";
import { Link } from "react-router-dom";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const {
        state: { cart },
        productDispatch,
        dispatch,
    } = useContext(Context);

    return (
        <>
            <header className="grid grid-cols-1 lg:grid-cols-3 lg:justify-between xl:grid-cols-3 justify-center items-center text-center space-x-5 space-y-3 p-5 mx-auto">
                <div>
                    <h1 className="text-2xl font-bold cursor-pointer select-none">
                        <Link to={"/"}>E Commerce Product Page</Link>
                    </h1>
                </div>
                <div className="flex justify-center">
                    <Input
                        type="text"
                        onChange={(e) => {
                            productDispatch({
                                type: "SEARCH_BY_PRODUCT",
                                payload: e.target.value,
                            });
                        }}
                        placeholder="Search..."
                        className="sm:w-96"
                    />
                </div>
                <div className="relative flex justify-center items-center gap-3">
                    <Button variant="outline" className="relative" onClick={toggleCart}>
                        <FaShoppingCart className="text-xl" />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            {cart.length}
                        </span>
                    </Button>
                    {isCartOpen && (
                        <Card className="absolute top-full mt-2 w-[500px] lg:right-0 justify-center  p-4 shadow-lg z-10">
                            <h2 className="text-lg font-bold mb-2 underline">Your Cart</h2>
                            <div className="flex flex-wrap gap-4 max-h-[300px] overflow-scroll">
                                {cart.map((car) => (
                                    <HeaderCard key={car?.id} card={car} />
                                ))}
                            </div>
                            <div className="mt-4">
                                <Link to={"/cart"} onClick={toggleCart}>
                                    <Button variant="primary" size="lg" className="w-full">
                                        Go To Cart
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    )}
                    <ModeToggle />
                </div>
            </header>
            <hr />
        </>
    );
};

export default Header;
