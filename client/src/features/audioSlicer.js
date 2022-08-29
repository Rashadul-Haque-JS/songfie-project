import { createSlice} from "@reduxjs/toolkit";



const initialState = {
    audio: [],
    inPlay:{}

}

const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        addAudio: (state, { payload }) => {
            state.audio = payload
        },
        addInPlay:(state,{payload})=>{
         state.inPlay = payload
        },
        insertComment: (state, { payload }) => {
            state.inPlay.comments.push(payload)
        },
        on: (state) => {
            state.inPlay.isPlaying = true

        }
    }
})

export const { addAudio, addInPlay, insertComment, on} = audioSlice.actions;

export default audioSlice.reducer;
