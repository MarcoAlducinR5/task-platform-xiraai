import { createSlice } from '@reduxjs/toolkit'

export const arrayTaskSlice = createSlice({
  name: 'arrayTask',
  initialState: {
    value: [
      { text: 'Cortar cebolla', completed: true },
      { text: 'Tomar el curso de intro a Réact', completed: false },
      { text: 'Aplicar a la vacante', completed: true },
      { text: 'Estudiar Ingles', completed: true },
      { text: 'Sacudir la sala', completed: true },
      { text: 'Planchar', completed: true },
      { text: 'Ver a mi novia', completed: true },
      { text: 'Hacer ejercicio', completed: true },
      { text: 'Dormir', completed: false },
      { text: 'Lloras con la Llorona', completed: false }
    ]
  },
  reducers: {
    arrayTask: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { arrayTask } = arrayTaskSlice.actions

export default arrayTaskSlice.reducer