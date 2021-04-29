import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
        userEmail: '',
        profilePic: '',
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userEmail = action.payload.email;
            state.profilePic = action.payload.pic;
        },
        logout: state => {
            state.isLoggedIn = false;
            state.userEmail = '';
            state.profilePic = '';
        }
    }
})

export const { login, logout } = loginSlice.actions;
export const selectLoginState = state => state.login.isLoggedIn;
export const selectUserEmail = state => state.login.userEmail;
export const selectProfilePic = state => state.login.profilePic;
export default loginSlice.reducer;
