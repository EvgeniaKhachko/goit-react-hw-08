import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);