import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    value: true
  },
  reducers: {
    changeMode: state => {
      state.value = !state.value;
    }
  }
})

export const { changeMode } = darkModeSlice.actions

export default darkModeSlice.reducer