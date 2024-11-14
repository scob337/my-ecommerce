import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface elData {
    id: number;
    img: string;
    title: string;
    desc: string;
    rate: string;
    price: number;
    category: string;
    imgCollection: string[];
    qty: number;
}

const initialState: elData[] = [];

const shopCardSlice = createSlice({
    name: 'shopCard',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Omit<elData, 'qty'>>) => {
            const existingProduct = state.find(item => item.id === action.payload.id);

            if (existingProduct) {
                existingProduct.qty += 1;
            } else {
                state.push({ ...action.payload, qty: 1 });
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(item => item.id === action.payload);

            if (index !== -1) {
                const product = state[index];
                if (product.qty > 1) {
                    product.qty -= 1;
                } else {
                    state.splice(index, 1);
                }
            }
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            return state.filter(item => item.id !== action.payload);
        }
    },
});

export const getTotalPrice = (state: elData[]) => {
    return state.reduce((total, item) => total + item.price * item.qty, 0);
};

export const { addProduct, removeProduct, deleteProduct } = shopCardSlice.actions;
export default shopCardSlice.reducer;
