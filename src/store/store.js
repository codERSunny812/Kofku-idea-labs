import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './Slice'

export const store = configureStore({
    reducer: {
        userData:userSlice.reducer
    }
})