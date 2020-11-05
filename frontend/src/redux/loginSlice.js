import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        login: state => {
            state.isLoggedIn = true;
        },
        logout: state => {
            state.isLoggedIn = false;
        }
    }
})

export const { login, logout } = loginSlice.actions;
export const selectLoginState = state => state.login.isLoggedIn;
export default loginSlice.reducer;
