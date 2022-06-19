import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    foodItems: [],
    error: ''
};

export const fetchFoodItems = createAsyncThunk("foodItems/fetchFoodItems", () => {
    return axios
        .get(`${process.env.REACT_APP_GOODFOOD_BACKEND_URL}/fooditems`)
        .then(response => response.data)
})

const foodItemsSlice = createSlice({
    name: "foodItems",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchFoodItems.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchFoodItems.fulfilled, (state, action) => {
            state.loading = false
            state.foodItems = action.payload
        })
        builder.addCase(fetchFoodItems.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default foodItemsSlice.reducer;

