import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "../slice/slice"

const store = configureStore({
    reducer: {
        login: loginReducer,
    }
});

export default store;