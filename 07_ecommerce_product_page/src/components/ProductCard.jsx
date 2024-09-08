import React, { useContext } from "react";
import Rating from "./Rating";
import Context from "../context/context";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
    const {
        state: { cart },
        dispatch,
    } = useContext(Context);

    // Add Product To Cart Handler
    const handleAddTocart = (data) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: data,
        });
        toast.success("Product Successfully Added To Cart !", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    // Remove Product To Cart Handler
    const handleRemoveCart = (id) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: id,
        });
        toast.error("Product Item Successfully Remove Form Cart!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    return (
        <>
            <div className="bg-dark-2 px-3 py-2 shadow-sm rounded-lg cursor-pointer border-2 hover:bg-gray-700 ease-in-out duration-100">
                <div className="w-full mb-2">
                    <div className="mb-2 overflow-hidden rounded-lg pt-4">
                        <img loading="lazy" src={product?.image} alt="image" className="w-full h-64 object-cover" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center my-3">
                            {product?.fastDelivery ? <Badge variant="success">Fast Delivery</Badge> : <Badge variant="destructive">4 Day Delivery</Badge>}
                            {product?.inStock ? <Badge variant="primary">In Stock</Badge> :  <Badge variant="destructive">Out Of Stock</Badge>}
                        </div>
                        <h3 className="mb-2 text-xl font-semibold dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-1xl">{product?.name}</h3>
                        <div>
                            <p className="text-base">Price: {product?.price}</p>
                            <div className="flex items-center justify-start gap-2">
                                <p className="text-base">Rating: </p>
                                <Rating rating={product?.rating} />
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap gap-2">
                            {cart.some((p) => p.id === product?.id) ? (
                                <Button onClick={() => handleRemoveCart(product?.id)} variant="destructive">
                                    Remove From Cart
                                </Button>
                            ) : (
                                <Button onClick={() => handleAddTocart(product)} variant="primary">
                                    Add To Cart
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
