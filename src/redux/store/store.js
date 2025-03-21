import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from '../actions/darkModeSlice'
import changeValueSearchTaskSliceReducer from '../actions/changeValueSearchTaskSlice'
import arrayTaskReducer from '../actions/arrayTaskSlice'
import modalAddTaskReducer from '../actions/modalAddTaskSlice'
import changeValueNewTaskSliceReducer from '../actions/changeValueNewTaskSlice'

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    changeValueSearchTask: changeValueSearchTaskSliceReducer,
    arrayTask: arrayTaskReducer,
    modalAddTask: modalAddTaskReducer,
    changeValueNewTask: changeValueNewTaskSliceReducer
  }
})