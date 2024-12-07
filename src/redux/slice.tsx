import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Camper {
        id: number,
        name: string,
        price: number,
        rating: number;
        location: string;
        description: string;
        engine: string;
        transmission: string;
        kitchen: boolean;
        AC: boolean;
        radio: boolean;
        gas: boolean;
        bathroom: boolean;
        refrigerator: boolean;
        water: boolean;
        microwave: boolean;
        gallery: {
            thumb: string,
            original: string,
        }[],
        reviews: {
            reviewer_name: string,
            reviewer_rating: number,
            comment: string,
        }[],
}

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
            // Перевіряємо, чи кемпер вже у корзині
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
