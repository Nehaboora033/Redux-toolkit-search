import { configureStore } from '@reduxjs/toolkit'
import { searchReducer } from "./features/SearchSlice";
import { collectionReducer } from './features/Collectionslice';


export const Store = configureStore({
    reducer: {
        search: searchReducer,
        collection: collectionReducer
    }
})