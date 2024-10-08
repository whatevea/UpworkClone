import { createSlice } from "@reduxjs/toolkit";
import { loggedInData } from '../../config/authData';

export const userSlice = createSlice({
    name: 'User', // Changed to lowercase
    initialState: {
        isLoggedIn: loggedInData()?.isLoggedIn || false,
        userData: loggedInData()?.userData || {},
        token: loggedInData()?.token || ""
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.userData = action.payload.userData;
            state.token = action.payload.token;
            // Save the updated state to local storage
            localStorage.setItem('userData', JSON.stringify({
                isLoggedIn: action.payload.isLoggedIn,
                userData: action.payload.userData,
                token: action.payload.token,
            }));
        },
        logout: (state) => {
            localStorage.removeItem("userData");
            // Directly update the state instead of returning a new object
            state.isLoggedIn = false;
            state.userData = {};
            state.token = "";
        },
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

// Adjusted to match the slice name
export const userSelector = (state) => state.User; // Assuming the slice is mounted at state.user
