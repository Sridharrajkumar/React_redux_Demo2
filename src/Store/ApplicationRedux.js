import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CardReducer";


const Store = configureStore({
    reducer: {
        card: CardReducer,
    },
})

export default Store