import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IShopCard {
    img: string
    title: string
    price:number
    qty:number
    total
}

const initialState: IShopCard = 
[
        {
        
    }
]

const ShopCard = createSlice({
    name: 'ShopCard',
    initialState,
    reducers: {

    },
})

// export const { GetProduct } = ShopCard.actions
export default ShopCard.reducer
