import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";


let initialState = {

}
const store = configureStore({
    reducer: {
        user: userReducer
    },
    preloadedState: initialState
})

export default store;