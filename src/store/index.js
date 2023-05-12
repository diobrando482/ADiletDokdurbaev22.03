import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productsListReducer from "./productsListReducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        productsList: productsListReducer
    }
})