import React, { useEffect, useMemo, useReducer } from "react";
import { CartReducer, ProductReducer } from "./reducer";
import Context from "./context";
import { ProductsList } from "../FakerProductData";

const Provider = ({ children }) => {
    const menoProduct = useMemo(() => ProductsList, []);

    const [state, dispatch] = useReducer(CartReducer, {
        products: menoProduct,
        cart: [],
    });

    const [productState, productDispatch] = useReducer(ProductReducer, {
        inStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    return <Context.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</Context.Provider>;
};

export default Provider;
