import {createSelector, createSlice, isAnyOf} from "@reduxjs/toolkit";
import {addContact, deleteContact, fetchContacts} from "./operations.js";
import {selectNameFilter} from "../filters/slice.js";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

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


export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        if (filter) {
            return contacts.filter(
                (contact) =>
                    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                    contact.number.includes(filter)
            );
        }
        return contacts;
    }
);

export const contactsReducer = slice.reducer;
