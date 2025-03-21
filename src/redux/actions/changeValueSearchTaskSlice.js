import { createSlice } from '@reduxjs/toolkit'

export const changeValueSearchTaskSlice = createSlice({
    name: 'changeValueSearchTask',
    initialState: {
      value: ''
    },
    reducers: {
      changeValueSearchTask: (state, action) => {
        state.value = action.payload;
      }
    }
  })
  
  export const { changeValueSearchTask } = changeValueSearchTaskSlice.actions
  
  export default changeValueSearchTaskSlice.reducer