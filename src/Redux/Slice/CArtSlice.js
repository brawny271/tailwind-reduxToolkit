import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, action){
        state.cart.push ( action.payload );
        console.log(state.cart)
        }
    }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer





// const CartSlice = createSlice({
//     name: 'cart',
//     initialState: { list:[], total: 0 },
//     reducers: {
//         addToCart(state,action){
//             const check = state.list.findIndex( ( book )=> book.id === action.payload.id);
//             if(check !== -1){
//                 state.list[check].quentity += action.payload.quentity;
//             }else{
//                 state.list.push(action.payload)
//             }
//         }
//     }
// })

// const [action, reducer] = CartSlice

// export const {addToCart} = action

// export default reducer