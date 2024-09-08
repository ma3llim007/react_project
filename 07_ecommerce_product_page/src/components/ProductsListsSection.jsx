import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Context from "../context/context";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProductsListsSection = () => {
    const {
        state: { products },
        productState: { sort, inStock, byFastDelivery, byRating, searchQuery },
    } = useContext(Context);

    const transformProducts = () => {
        let sortedProducts = products;
        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) => (sort === "ascending" ? a.price - b.price : b.price - a.price));
        }
        if (!inStock) {
            sortedProducts = sortedProducts.filter((product) => product.inStock);
        }
        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((product) => product.fastDelivery);
        }
        if (byRating) {
            sortedProducts = sortedProducts.filter((product) => product.rating >= byRating);
        }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return sortedProducts;
    };

    return (
        <ScrollArea className="w-full h-[710px] overflow-auto">
            <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {transformProducts().map((product) => (
                    <ProductCard key={product?.id} product={product} />
                ))}
            </div>
        </ScrollArea>
    );
};

export default ProductsListsSection;
