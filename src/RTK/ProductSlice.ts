import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
    id: number;
    img: string;
    desc: string;
    title: string;
    rate: string;
    price: number;
    category: string;
    imgCollection: string[];
}

const initialState: IProduct = {
    id: 1,
    img: "",
    desc: "",
    rate: "",
    price: 0,
    category: "",
    title: "",
    imgCollection: []
};

const productSlice = createSlice({
    name: 'getProduct',
    initialState,
    reducers: {
        GetProduct: (state, action: PayloadAction<IProduct>) => {
            state.id = action.payload.id;
            state.img = action.payload.img;
            state.desc = action.payload.desc;
            state.rate = action.payload.rate;
            state.price = action.payload.price;
            state.category = action.payload.category;
            state.title = action.payload.title;
            state.imgCollection = action.payload.imgCollection;
        }
    },
});

export const { GetProduct } = productSlice.actions;
export default productSlice.reducer;
