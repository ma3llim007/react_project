import React, { useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Rating from "./Rating";
import { Button } from "./ui/button";
import Context from "@/context/context";

const ProductAside = () => {
    const { productState, productDispatch } = useContext(Context);

    return (
        <>
            <div data-collapsed="false" className="group flex flex-col gap-4 py-2">
                <h2 className="text-2xl font-bold underline text-center">Filter Products</h2>
                <nav className="grid gap-1 px-2 place-content-center">
                    <div className="inline-flex gap-2 items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 h-20 rounded-md px-3 dark:text-white dark:hover:bg-muted dark:hover:text-white justify-start">
                        <RadioGroup
                            onValueChange={(order) => {
                                productDispatch({
                                    type: "SORT_PRODUCTS",
                                    payload: order,
                                });
                            }}
                        >
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <RadioGroupItem checked={productState.sort === "ascending" ? true : false} value="ascending" id="ascending" />
                                <Label className="cursor-pointer  text-xl" htmlFor="ascending">
                                    Ascending
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <RadioGroupItem checked={productState.sort === "descending" ? true : false} value="descending" id="descending" />
                                <Label className="cursor-pointer  text-xl" htmlFor="descending">
                                    Descending
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="inline-flex gap-2 items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 h-9 rounded-md px-3 dark:text-white dark:hover:bg-muted dark:hover:text-white justify-start">
                        <Checkbox
                            onClick={() => {
                                productDispatch({
                                    type: "INCLUDE_OF_STOCK",
                                });
                            }}
                            className="cursor-pointer"
                            id="productInStock"
                            checked={productState.inStock}
                        />
                        <Label className="cursor-pointer text-xl" htmlFor="productInStock">
                            Include Out Of Stock
                        </Label>
                    </div>
                    <div className="inline-flex gap-2 items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 h-9 rounded-md px-3 dark:text-white dark:hover:bg-muted dark:hover:text-white justify-start">
                        <Checkbox
                            onClick={() => {
                                productDispatch({
                                    type: "FILTER_BY_DELIVERY",
                                });
                            }}
                            className="cursor-pointer"
                            id="fastDelivery"
                            checked={productState.byFastDelivery}
                        />
                        <Label className="cursor-pointer text-xl" htmlFor="fastDelivery">
                            Fast Delivery Only
                        </Label>
                    </div>
                    <div className="inline-flex gap-2 items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 h-9 rounded-md px-3 dark:text-white dark:hover:bg-muted dark:hover:text-white justify-start">
                        <Rating
                            onClick={(i) => {
                                productDispatch({
                                    type: "FILTER_BY_RATING",
                                    payload: i + 1,
                                });
                            }}
                            rating={productState.byRating}
                        />
                    </div>
                </nav>
                <div className="inline-flex justify-center">
                    <Button
                        variant="secondary"
                        onClick={() => {
                            productDispatch({
                                type: "CLEAR_FILTER",
                            });
                        }}
                        size="full"
                    >
                        Clear Filter
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ProductAside;
