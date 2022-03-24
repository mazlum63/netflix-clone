import { createSlice } from "@reduxjs/toolkit";

export const loginScreenSlice = createSlice({
    name: 'loginScreen',
    initialState: {
        screenStatus: false
    },
    reducers: {
        screenOpen: state => {
            state.screenStatus = true
        },
        screenClose: state => {
            state.screenStatus = false
        }
    }
})

export const { screenOpen, screenClose } = loginScreenSlice.actions;
export default loginScreenSlice.reducer