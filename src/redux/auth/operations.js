import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const goitAPI = axios.create({
    baseURL: 'https://connections-api.goit.global/',
});

const setAuthHeader = token => {
    goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
        const response = await goitAPI.post('/users/signup', body);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const response = await goitAPI.post('/users/login', body);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
       await goitAPI.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshPage = createAsyncThunk('auth/refreshPage', async (_, thunkAPI) => {
    try {
        const savedToken = thunkAPI.getState().auth.token;

        if (!savedToken) {
            return thunkAPI.rejectWithValue('Token is not exist!');
        }

        setAuthHeader(savedToken);
        const response = await goitAPI.get('users/current');
        console.log()
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});