import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "../slice/moviesSlice"

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
});

export default store;