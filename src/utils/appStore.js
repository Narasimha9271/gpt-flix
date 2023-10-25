import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
//configure store will have reducers and thisreducer will have diff reducers from diff slices
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
});

export default appStore;
