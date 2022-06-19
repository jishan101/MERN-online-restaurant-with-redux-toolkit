import { createSlice } from "@reduxjs/toolkit";

let localStorageData = [];
if(localStorage.getItem("cartItems")) {
    localStorageData = JSON.parse(localStorage.getItem("cartItems"));
}

const initialState = {
    foodItems: localStorageData
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        added: (state, action) => {
            if(!state.foodItems.some(foodItem => foodItem._id === action.payload._id)) {
                state.foodItems.push({...action.payload, quantity: 1});
                localStorage.setItem("cartItems", JSON.stringify(state.foodItems));
            }
        },
        deleted: (state, action) => {
            state.foodItems = state.foodItems.filter(foodItem => action.payload !== foodItem._id);
            localStorage.setItem("cartItems", JSON.stringify(state.foodItems));
        },
        minus: (state, action) => {
            state.foodItems = state.foodItems.map(foodItem => {
                if(action.payload === foodItem._id) {
                    return {
                        ...foodItem,
                        quantity: foodItem.quantity - 1
                    };
                }
                return foodItem;
            });
            localStorage.setItem("cartItems", JSON.stringify(state.foodItems));
        },
        plus: (state, action) => {
            state.foodItems = state.foodItems.map(foodItem => {
                if(action.payload === foodItem._id) {
                    return {
                        ...foodItem,
                        quantity: foodItem.quantity + 1
                    };
                }
                return foodItem;
            });
            localStorage.setItem("cartItems", JSON.stringify(state.foodItems));
        }
    }
})

export default cartSlice.reducer;
export const { added, deleted, minus, plus } = cartSlice.actions;

