import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { getAvatar } from "../../api/api"

// export const getPhoto = createAsyncThunk(
//     'photos/getPhotos',
//     async(id)=>{
//     const res = await getAvatar(id)
//     return res
//     }
// )

const initialState = {
    logedInUser: null,
    photo: null,
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
        },
        getPhoto: (state,{ payload}) => {
            state.photo = payload
        }
    }
})

export const { addLogedUser, logOutUser, addToken, removeToken } = authSlicer.actions;

export default authSlicer.reducer;