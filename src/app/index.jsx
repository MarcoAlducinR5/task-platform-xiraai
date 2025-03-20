import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../redux/actions/darkModeSlice'

function App() {
  const stateDarkMode = useSelector(state => state.darkMode.value)
  const dispatch = useDispatch()

  return (
    <>
      <div className={`${stateDarkMode ? 'bg-white' : 'dark:bg-gray-800'} w-screen h-screen px-6 py-8 ring shadow-xl ring-gray-900/5`}>
        <button className={`${stateDarkMode ? 'text-gray-900 hover:text-white hover:bg-gray-800' : 'dark:text-white hover:bg-white hover:text-gray-900'}`} onClick={() => dispatch(changeMode())}>
          <span>{`Tema ${stateDarkMode ? 'Oscuro ' : 'Claro '}`}</span>
          {stateDarkMode ? <DarkModeOutlinedIcon htmlColor={`${stateDarkMode ? '' : '#101828'}`} /> : <LightModeOutlinedIcon htmlColor={`${stateDarkMode ? '#fff' : ''}`} />}
        </button>
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg className="h-6 w-6 stroke-white" >
              
            </svg>
          </span>
        </div>
        <h3 className={`${stateDarkMode ? 'text-gray-900' : 'dark:text-white'} mt-5 text-base font-medium tracking-tight `}>Writes upside-down</h3>
        <p className={`${stateDarkMode ? 'text-gray-500' : 'dark:text-gray-400'} mt-2 text-sm `}>
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
        </p>
      </div>
    </>
  )
}

export default App
