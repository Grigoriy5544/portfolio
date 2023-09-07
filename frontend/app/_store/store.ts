'use client'

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import themeReducer from './theme/theme.slice'
import {api} from "@/app/_store/api/api";
import {setupListeners} from "@reduxjs/toolkit/query";

const reducers = combineReducers({
    themeReducer,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch