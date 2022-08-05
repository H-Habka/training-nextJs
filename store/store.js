import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import { createWrapper } from "next-redux-wrapper";

const combinedReducers = combineReducers({
    counterSlice,
});

export const makeStore = () =>
    configureStore({
        reducer : combinedReducers
    });


export const wrapper = createWrapper(makeStore);
