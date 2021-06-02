import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
    toolbar: {
      build: {
        status: ''
      },
      save: {
        status: ''
      }, 
      zoom: {
        status: ''
      }, 
      upload: {
        status: ''
      }, 
      openLoadApp : {
        status : '', 
        appName : '', 
        appId : ''
      }
    }
  },
  reducers: {
    
    startBuildProcess: (state) => {
      state.value += 1
    },
    cancelBuildProcess: (state) => {
      console.log('cancel build process');
      state.value -= 1
    },
    getBuildStatus: (state, action : PayloadAction<number>) => {
      state.value += action.payload
    },
    zoomIn: (state, action : PayloadAction<number>) => {
      state.value += action.payload
    },
    zoomOut: (state, action : PayloadAction<number>) => {
      state.value += action.payload
    },
    saveApp: (state, action : PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { startBuildProcess, cancelBuildProcess, getBuildStatus, zoomIn, zoomOut, saveApp } = userSlice.actions

export default userSlice.reducer