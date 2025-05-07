import { createSlice } from '@reduxjs/toolkit';
import {registerThunk} from "./operations.js";

const initialState = {
    user: {
        email: null,
        name: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const slice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
    }
});

export const authReducer = slice.reducer;