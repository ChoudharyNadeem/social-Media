import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/authReducers";

const store = configureStore({
    reducer:{
        Auth:authReducer,
    }
})
export default store;