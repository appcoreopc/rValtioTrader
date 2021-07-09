import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const appBarSlice = createSlice({
  name: 'toolbar',
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
    },
    imageAsset : {
      images : {}
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
    loadImageAsset: (state, action : PayloadAction<any[]>) => {
      console.log('Loading image assets');
      state.imageAsset.images =  action.payload;
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

// Action creators are generated for each case reducer function
export const { startBuildProcess, cancelBuildProcess, getBuildStatus, zoomIn, zoomOut, saveApp, loadImageAsset } = appBarSlice.actions

export default appBarSlice.reducer