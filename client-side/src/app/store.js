import { configureStore } from "@reduxjs/toolkit";
import foodItemsReducer from "../features/fooditems/foodItemsSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
    reducer: {
        foodItems: foodItemsReducer,
        cart: cartReducer
    }
})

export default store;

