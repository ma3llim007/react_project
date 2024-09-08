import React from "react";
import ProductsListsSection from "./ProductsListsSection";
import ProductAside from "./ProductAside";

const ProductLayout = () => {
    return (
        <section className="w-full flex flex-wrap">
            <aside className="w-full my-4 border-r lg:w-1/5">
                <ProductAside />
            </aside>
            <main className="w-full my-4 lg:w-4/5">
                <ProductsListsSection />
            </main>
        </section>
    );
};

export default ProductLayout;
