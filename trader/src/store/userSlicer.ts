import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlicer = createSlice({
  name: 'user',
  initialState: {
    
    user: {
      name : '',
      userId : ''
    },
    status : '',
    role: {
      roleType: ''
    }
  },
  reducers: {
    logInUser: (state) => {
      
    },
    logOutUser: (state) => {
      
    },
  },
})

export const { logInUser, logOutUser } = userSlicer.actions

export default userSlicer.reducer