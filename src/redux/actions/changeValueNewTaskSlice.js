import { createSlice } from '@reduxjs/toolkit'

export const changeValueNewTaskSlice = createSlice({
    name: 'changeValueNewTask',
    initialState: {
      value: ''
    },
    reducers: {
      changeValueNewTask: (state, action) => {
        state.value = action.payload;
      }
    }
  })
  
  export const { changeValueNewTask } = changeValueNewTaskSlice.actions
  
  export default changeValueNewTaskSlice.reducer