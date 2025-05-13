import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {addContact, deleteContact, fetchContacts} from "./operations.js";
import {logout} from "../auth/operations.js";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const handelFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
};

const slice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, handelFulfilled)
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(logout.fulfilled, (state) => {
                state.items = [];
                state.loading = false;
                state.error = null;
            })
            .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            )
            .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending,), (state) => {
                state.isLoading = true;
            })
    },
});

export const contactsReducer = slice.reducer;
