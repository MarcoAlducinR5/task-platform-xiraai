import { useDispatch, useSelector } from "react-redux";
import { changeValueSearchTask } from "../../../redux/actions/changeValueSearchTaskSlice";

function TaskSearch() {
    
    const dateInputSearch = useSelector(state => state.changeValueSearchTask.value)
    const dispatch = useDispatch()
    
    const onSearchValueChange = (event) => {
        dispatch(changeValueSearchTask(event.target.value));
    };

    return (
        <>
            <input className='my-2 py-1.5 pr-3 pl-1 border-2 placeholder:text-gray-500 placeholder:italic rounded-2xl' placeholder="Cebolla" value={dateInputSearch} onChange={onSearchValueChange} />
        </>
    );
    
}

export {TaskSearch}