import { configureStore } from '@reduxjs/toolkit'
import ToggleSlice from './ToggleSlice'
const store = configureStore({
    reducer: {
        Toggle: ToggleSlice,
    },
})
export type RootState = ReturnType<typeof store.getState>

export default store    