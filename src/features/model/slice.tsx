import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Camper} from "../../entities/types.ts";

interface CartState {
    items: Camper[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Camper>) {
            const camperExists = state.items.some(item => item.id === action.payload.id);
            if (!camperExists) {
                state.items.push(action.payload);
            }
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
