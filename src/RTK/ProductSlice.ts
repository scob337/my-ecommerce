import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IProduct {
    id: number;
    img: string;
    desc: string;
    title: string;
    rate: string;
    price: number;
    category: string;
    imgCollection: string[]
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
}

const productSlice = createSlice({
    name: 'getProduct',
    initialState,
    reducers: {
        GetProduct: (_, action: PayloadAction<IProduct>) => {
            return action.payload;
        }
    },
})

export const { GetProduct } = productSlice.actions
export default productSlice.reducer
