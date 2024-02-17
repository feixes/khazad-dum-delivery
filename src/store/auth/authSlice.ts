import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'not-authenticated',
    name: null,
    email: null,
    password: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.name = payload.name
            state.email = payload.email
            state.password = payload.password
        },

        logout: (state) => {
            state = initialState
        },

        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
})