import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goitAPI = axios.create({
    baseURL: 'https://connections-api.goit.global/',
});

const setAuthHeader = token => {
    goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerThunk = createAsyncThunk('register', async (body, thunkAPI) => {
    try {
        const response = await goitAPI.post('/users/signup', body);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});