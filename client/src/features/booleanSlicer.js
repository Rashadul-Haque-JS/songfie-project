import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    play: false,
    signup: false

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
        }


    }
})

export const { addBoolean, addSignup, removeSignup } = booleanSlice.actions;
export default booleanSlice.reducer;