import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    play: false,
    signup: false,
    reset: false

}

const booleanSlice = createSlice({
    name: 'boolean',
    initialState,
    reducers: {
        addBoolean: (state) => {
            state.play = true
        },
        addSignup: (state) => {
            state.signup = true
        },
        removeSignup: (state) => {
            state.signup = false
        },
        resetTrue: (state) => {
            state.reset = true
        },
        resetFalse: (state) => {
            state.reset = false
        }


    }
})

export const { addBoolean, addSignup, removeSignup, resetFalse, resetTrue} = booleanSlice.actions;
export default booleanSlice.reducer;