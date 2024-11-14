import { configureStore } from '@reduxjs/toolkit'
import ToggleSlice from './ToggleSlice'
import Product from './ProductSlice'
import shopCard from './ShopCardSlice'
import WishList from './WishList'
const store = configureStore({
    reducer: {
        Toggle: ToggleSlice,
        Product: Product,
        ShopCard: shopCard,
        WishCard: WishList,
    },
})
export type RootState = ReturnType<typeof store.getState>

export default store    