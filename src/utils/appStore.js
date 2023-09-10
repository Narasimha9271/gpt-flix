import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

//configure store will have reducers and thisreducer will have diff reducers from diff slices
const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;
