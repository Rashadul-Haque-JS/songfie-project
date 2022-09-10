import { configureStore } from '@reduxjs/toolkit';
import audioSlicer from '../features/audioSlicer';
import usersSlicer from '../features/users/userSlicer';
import authSlicer from '../features/users/authSlicer';
import booleanSlicer from '../features/booleanSlicer';
// import fileSlicer from '../features/fileSlicer';

export const store = configureStore({
  reducer: {
    usersReducer: usersSlicer,
    authReducer: authSlicer,
    audioReducer: audioSlicer,
    booleanReducer: booleanSlicer,
    // filesReducer : fileSlicer,
    
    

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['photos/getPhotos'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
  
});
