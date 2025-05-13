import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const goitAPI = axios.create({
    baseURL: 'https://680a5972d5075a76d987b767.mockapi.io',
});

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await goitAPI.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await goitAPI.post("/contacts", newContact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            await goitAPI.delete(`/contacts/${id}`);
            return id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });