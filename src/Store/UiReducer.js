import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    ActivateCard: false,
    notification: null,
    
}

const UiReducer = createSlice({
    name: "ui",
    initialState,
    reducers: {
        hideCard(state) {
            state.ActivateCard= !state.ActivateCard;
        },
        showNotification(state, action) { 
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
})

export const UiAction = UiReducer.actions;

export default UiReducer.reducer