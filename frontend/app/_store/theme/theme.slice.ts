'use client'

import {createSlice} from "@reduxjs/toolkit";
import {ETheme} from "@/app/_types/theme.types";

export interface ThemeState {
    theme: ETheme
}

const initialState: ThemeState = {
    theme: ETheme.light
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state.theme === ETheme.light) {
                state.theme = ETheme.dark
                localStorage.setItem('theme', 'dark')
                document.body.classList.add('dark-mode')
            } else {
                state.theme = ETheme.light
                localStorage.setItem('theme', 'light')
                document.body.classList.remove('dark-mode')
            }
        },
        refreshTheme: (state) => {
            if (localStorage.theme === ETheme.dark) {
                state.theme = ETheme.dark
                localStorage.setItem('theme', 'dark')
                document.body.classList.add('dark-mode')
            } else {
                state.theme = ETheme.light
                localStorage.setItem('theme', 'light')
                document.body.classList.remove('dark-mode')
            }
        }
    }
})

export const actions = themeSlice.actions

export default themeSlice.reducer