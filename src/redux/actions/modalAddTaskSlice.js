import { createSlice } from '@reduxjs/toolkit'

export const modalAddTaskSlice = createSlice({
  name: 'modalAddTask',
  initialState: {
    value: false
  },
  reducers: {
    modalAddTask: state => {
      state.value = !state.value;
    }
  }
})

export const { modalAddTask } = modalAddTaskSlice.actions

export default modalAddTaskSlice.reducer