import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from '../actions/darkModeSlice'

export default configureStore({
  reducer: {
    darkMode: darkModeReducer
  }
})