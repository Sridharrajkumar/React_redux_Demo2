import { createSlice } from "@reduxjs/toolkit"
import { UiAction } from "./UiReducer";


const initialState = {
    items: [],
    TotalAmount: 0,
    changed: false,
    
}

const Cardslice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addCard(state, action) {
            if (!state.items) {
                state.items = [];
            }
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
            state.changed = true;
            

        },
        removeItem(state, action) {
            if (!state.items) {
                state.items = [];
            }
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
            state.changed = true;
        },
        replaceCart(state, action) {
            state.items = action.payload.items;
            state.TotalAmount = action.payload.TotalAmount;
        }
        
    }

})


export const sendCartData = (cart) => {
    return async(dispatch) => {
        dispatch(
            dispatch(UiAction.showNotification({
                status: 'Pending',
                title: 'Sending...',
                message: 'Please wait while we send your request'
            }))
        );

        const fetchFun = async () => {

            const response = await fetch('https://react-reduxdemo2-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if(!response.ok){
                throw new Error("Could not fetch data");
            }
        }

        try {
            await fetchFun();

            dispatch(UiAction.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Data send to Cart'
              }))

        }
        catch (error) {
            
            dispatch(UiAction.showNotification({
                status: 'error',
                title: 'Erroe',
                message: 'Sending cart data failed'
              }));
            
        }


    }
}

export const getCartData = () => {
    return async (dispatch) => {
      const getData = async () => {
        const response = await fetch(
          "https://react-reduxdemo2-default-rtdb.firebaseio.com/cart.json"
        );

        if (!response.ok) {
          throw new Error("Fetch Data Failed");
        }

        const data= await response.json();
        return data;
      };
      try{
       const cartData= await getData();
       dispatch(cardAction.replaceCart(cartData));
      }catch(error){
        dispatch(
            UiAction.showNotification({
              status: "error",
              title: "Error!",
              message: "Fetching data to cart failed",
            })
          );
      }
    };
  };

export const cardAction = Cardslice.actions;

export default Cardslice.reducer

