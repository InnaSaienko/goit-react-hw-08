import { configureStore } from '@reduxjs/toolkit';
import {filterReducer} from "./filters/slice.js";
import {contactsReducer} from "./contacts/slice.js";
import {authReducer} from "./auth/slice.js";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const authPersistConfig = {
    key: "auth",
    version: 1,
    storage,
    whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer,
        auth: persistedAuthReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools:  import.meta.env.MODE === 'development',
});
export const persistor = persistStore(store);