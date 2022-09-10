
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFiles = createAsyncThunk(
    'files/findFiles',
    async(values)=>{
        console.log(values)
    const res = await values 
    console.log('res ', res)  
    return res
    }
)

const initialState = {
    file:{}
}

const slicer = createSlice({
    name: 'file',
    initialState,
    reducers: {
        getFiles: (state,{ payload}) => {
            state.file = payload
        }

    }
})



export default slicer.reducer;