import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [],
    TotalAmount: 0,
}

const Cardslice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addCard(state, action) {
            const ExistingCartItem = state.items.findIndex((item) => item.id === action.payload.id);
            const ExistingItem=state.items[ExistingCartItem]
            if (ExistingItem)
             {
                ExistingItem.quantity++;
                ExistingItem.totalPrice = ExistingItem.totalPrice + action.payload.price;
            }
            else
            {
                state.items.push({ ...action.payload, totalPrice: action.payload.price });
            }
            state.TotalAmount = state.TotalAmount + action.payload.price;
            

        },
        removeItem(state, action) {
            const ExistingCartItem = state.items.findIndex((item) => item.id === action.payload.id);
            const ExistingItem = state.items[ExistingCartItem]
            if (ExistingItem.quantity > 1) {
                ExistingItem.quantity--;
                ExistingItem.totalPrice = ExistingItem.totalPrice - action.payload.price;
                state.TotalAmount = state.TotalAmount - action.payload.price;
            }
            else {
                state.items.splice(ExistingCartItem, 1);
                state.TotalAmount = state.TotalAmount - ExistingItem.totalPrice;
            }
        },
        
    }

})

export const cardAction = Cardslice.actions;

export default Cardslice.reducer

