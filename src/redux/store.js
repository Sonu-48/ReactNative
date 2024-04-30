import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/UserdataSlice";


const store = configureStore({
    reducer:{
        userdata:userReducer,
    }
})
export default store;