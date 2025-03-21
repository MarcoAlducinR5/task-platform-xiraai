import { useSelector } from 'react-redux'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function TaskItem(props) {

    const stateDarkMode = useSelector(state => state.darkMode.value)

    const onComplete = () => {
        alert("Ya completaste el TODO ");
    };
    
    const onDelete = () => {
        alert("Borraste el TODO ");
    };
    
    return (
        <>
            <li key={props.item} className={`${stateDarkMode ? 'border-gry-800' : 'border-white'} flex flex-row  border-2 mb-2 rounded-4xl`}>
                <div className={`${props.state ? 'text-gray-500 line-through' : ''} block w-5/6 px-4 py-2 mr-2`}>{props.item} {props.state} </div>
                <div className='block w-1/6'>
                    <div className='flex flex-col h-full justify-around'>
                        <div className='block px-2 my-2'>
                            <button className={`${stateDarkMode ? 'hover:bg-gray-300' : 'hover:bg-gray-500'} rounded-4xl`} onClick={() => onComplete()}>
                                <CheckCircleOutlineOutlinedIcon htmlColor={`${props.state ? '#05df72' : ''}`} />
                            </button>
                        </div>
                        <div className='block px-2 my-2'>
                            <button className={`${stateDarkMode ? 'hover:bg-gray-300' : 'hover:bg-gray-500'} rounded-4xl`} onClick={() => onDelete()}>
                                <CancelOutlinedIcon htmlColor='#fb2c36' />
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
    
}

export {TaskItem}