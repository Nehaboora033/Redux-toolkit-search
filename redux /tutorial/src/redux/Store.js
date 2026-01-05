import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/Counterslices'

export const Store = configureStore({
    reducer: {
        counter: counterReducer

    }
})