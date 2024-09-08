export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }],
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                cart: state.cart.filter((cartProduct) => cartProduct?.id !== action.payload),
            };

        case "QTY_CHANGE":
            return {
                ...state,
                cart: state.cart.filter((cart) => (cart?.id === action.payload.id ? (cart.qty = action.payload.qty) : cart.qty)),
            };

        default:
            return state;
    }
};

export const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SORT_PRODUCTS":
            return {
                ...state,
                sort: action.payload,
            };
        case "INCLUDE_OF_STOCK":
            return {
                ...state,
                inStock: !state.inStock,
            };
        case "FILTER_BY_DELIVERY":
            return {
                ...state,
                byFastDelivery: !state.byFastDelivery,
            };
        case "FILTER_BY_RATING":
            return {
                ...state,
                byRating: action.payload,
            };
        case "CLEAR_FILTER":
            return {
                inStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: "",
            };

        case "SEARCH_BY_PRODUCT":
            return {
                ...state,
                searchQuery: action.payload,
            };

        default:
            return state;
    }
};