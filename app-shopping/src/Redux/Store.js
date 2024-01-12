import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./CartSlice"
import prodReducer from "./ProductSlice"


const store = configureStore({
    reducer: {
        carts : cartReducer,
        products : prodReducer
    }
})


export default store;

