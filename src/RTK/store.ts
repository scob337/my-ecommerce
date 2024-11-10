import { configureStore } from '@reduxjs/toolkit'
import ToggleSlice from './ToggleSlice'
import Product from './ProductSlice'
const store = configureStore({
    reducer: {
        Toggle: ToggleSlice,
        Product: Product,
    },
})
export type RootState = ReturnType<typeof store.getState>

export default store    