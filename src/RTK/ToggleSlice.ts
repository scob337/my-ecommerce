import { createSlice } from '@reduxjs/toolkit'

interface IToggle {
    Toggle: boolean
}

const initialState: IToggle = {
    Toggle: false
}

const ToggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        Closetoggle: (state, action) => {
            state.Toggle = action.payload
        },
        Opentoggle: (state, action) => {
            state.Toggle = action.payload
        },
    },
})

export const { Closetoggle, Opentoggle } = ToggleSlice.actions
export default ToggleSlice.reducer