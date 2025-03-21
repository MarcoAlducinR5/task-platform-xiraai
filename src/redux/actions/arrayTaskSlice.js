import { createSlice } from '@reduxjs/toolkit'

export const arrayTaskSlice = createSlice({
  name: 'arrayTask',
  initialState: {
    value: []
  },
  reducers: {
    arrayTask: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { arrayTask } = arrayTaskSlice.actions

export default arrayTaskSlice.reducer