import { useSelector, useDispatch } from 'react-redux'
import { arrayTask } from '../redux/actions/arrayTaskSlice';

function useLocalStorage(item) {
  
    const listTask = useSelector(state => state.arrayTask.value)
  
    const dispatch = useDispatch();
  
    const localStorageTodos = localStorage.getItem(item);
    
    if(!localStorageTodos && listTask.length === 0){
      localStorage.setItem(item, JSON.stringify(listTask));
      dispatch(arrayTask(localStorageTodos))
  
    } else {
      dispatch(arrayTask(localStorageTodos))
    }
}

export {useLocalStorage}