import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from '../actions/darkModeSlice'
import changeValueSearchTaskSliceReducer from '../actions/changeValueSearchTaskSlice'
import arrayTaskReducer from '../actions/arrayTaskSlice'

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    changeValueSearchTask: changeValueSearchTaskSliceReducer,
    arrayTask: arrayTaskReducer
  }
})