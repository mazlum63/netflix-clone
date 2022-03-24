import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: 'registration',
    initialState: {
        registeredUsers: []
    },
    reducers: {
        register: (state, action) => {
            if (state.registeredUsers.some(item => item.email === action.payload.email)) {
                alert('this email already used')
            } else {
                state.registeredUsers = [...state.registeredUsers, action.payload];
                alert('registration is successfull')
            }
        }
    }
})

export const { register } = registerSlice.actions

export default registerSlice.reducer