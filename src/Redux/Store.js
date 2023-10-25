import { configureStore } from "@reduxjs/toolkit";

import cartReducer from '../Redux/Slice/CArtSlice';

const store =  configureStore({
    reducer:{
        cart: cartReducer
    }
})

export default store

// const rootReducer = {
//     cart: cartReducer,
// }

// const store = configureStore ({
//     reducer: rootReducer
// });

// export default store;