import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../../redux/actions/darkModeSlice'

function Header() {
    const stateDarkMode = useSelector(state => state.darkMode.value)
    const dispatch = useDispatch()

    return (
        <>
            <header className={`${stateDarkMode ? 'bg-white' : 'dark:bg-gray-800'} fixed top-0 left-0 right-0 `}>
                <nav className="flex flex-wrap">
                    <div className="flex justify-start w-full md:w-1/3 p-0 md:p-4 "></div>
                    <div className="flex justify-center w-full md:w-1/3 p-0 md:p-4 "></div>
                    <div className="flex justify-end w-full md:w-1/3 p-4 ">
                    <button className={`${stateDarkMode ? 'text-gray-900 hover:text-white hover:bg-gray-800' : 'dark:text-white hover:bg-white hover:text-gray-900'} px-2 py-1 rounded-lg`} onClick={() => dispatch(changeMode())}>
                        <span>{`Tema ${stateDarkMode ? 'Oscuro ' : 'Claro '}`}</span>
                        {stateDarkMode ? <DarkModeOutlinedIcon htmlColor={`${stateDarkMode ? '' : '#101828'}`} /> : <LightModeOutlinedIcon htmlColor={`${stateDarkMode ? '#fff' : ''}`} />}
                    </button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export { Header };