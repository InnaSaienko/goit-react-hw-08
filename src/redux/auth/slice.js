import { createSlice } from '@reduxjs/toolkit';
import {login, logout, refreshPage, register} from "./operations.js";

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
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshPage.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload;
                state.isRefreshing = false;
            })
            .addCase(refreshPage.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshPage.rejected, (state) => {
                state.isRefreshing = false;
            })
    }
});

export const authReducer = slice.reducer;