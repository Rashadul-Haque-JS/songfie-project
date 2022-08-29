import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    logedInUser: null,
    token:null,
}

const authSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        addLogedUser: (state, { payload }) => {
            state.logedInUser = payload
        },
         logOutUser: (state) => {
            state.logedInUser = null
        },
        addToken: (state, { payload }) => {
            state.token = payload
        },
        removeToken: (state) => {
            state.token = null
        }
    }
})

export const { addLogedUser, logOutUser, addToken, removeToken } = authSlicer.actions;



export default authSlicer.reducer;