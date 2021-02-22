import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
        userEmail: '',
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userEmail = action.payload;
        },
        logout: state => {
            state.isLoggedIn = false;
            state.userEmail = '';
        }
    }
})

export const { login, logout } = loginSlice.actions;
export const selectLoginState = state => state.login.isLoggedIn;
export const selectUserEmail = state => state.login.userEmail;
export default loginSlice.reducer;
