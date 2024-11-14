import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface elData {
    id: number;
    img: string;
    title: string;
    desc: string;
    rate: string;
    price: number;
}

const initialState: elData[] = [];

const WishListSlice = createSlice({
    name: 'WishList',
    initialState,
    reducers: {
        addWish: (state, action: PayloadAction<Omit<elData, 'qty'>>) => {
            const existingProduct = state.some(item => item.id === action.payload.id);

            if (!existingProduct) {
                state.push(action.payload);
            }
        },

        deleteProduct: (state, action: PayloadAction<number>) => {
            return state.filter(item => item.id !== action.payload);
        }
    },
});

export const { addWish, deleteProduct } = WishListSlice.actions;
export default WishListSlice.reducer;
