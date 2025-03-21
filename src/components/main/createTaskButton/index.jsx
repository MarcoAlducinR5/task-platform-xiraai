import { useDispatch, useSelector } from 'react-redux'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { modalAddTask } from '../../../redux/actions/modalAddTaskSlice';

function CreateTaskButton() {

    const stateDarkMode = useSelector(state => state.darkMode.value)
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(modalAddTask())
    };

    return (
        <>
            <button className={`${stateDarkMode ? 'hover:bg-gray-300' : 'hover:bg-gray-500'} p-1 my-4 rounded-4xl`} onClick={() =>openModal()}>
                <AddCircleOutlineOutlinedIcon fontSize='large' />
            </button>
        </>
    );
    
}

export {CreateTaskButton}