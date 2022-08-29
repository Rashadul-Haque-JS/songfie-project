import { configureStore } from '@reduxjs/toolkit';
import audioSlicer from '../features/audioSlicer';
import usersSlicer from '../features/users/userSlicer';
import authSlicer from '../features/users/authSlicer';
import booleanSlicer from '../features/booleanSlicer';

export const store = configureStore({
  reducer: {
    usersReducer: usersSlicer,
    authReducer: authSlicer,
    audioReducer: audioSlicer,
    booleanReducer: booleanSlicer

  }

});
