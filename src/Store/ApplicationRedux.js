import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CardReducer";
import UiReducer from "./UiReducer";


const Store = configureStore({
    reducer: {
        card: CardReducer,
        ui: UiReducer,
        
    },
})

export default Store