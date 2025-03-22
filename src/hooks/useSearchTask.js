import { useDispatch, useSelector } from "react-redux";
import { arrayTask } from "../redux/actions/arrayTaskSlice";

function useSearchTask() {
    const listTask = JSON.parse(useSelector(state => state.arrayTask.value))

    let searchedTask = [];

    const dateInputSearch = useSelector(state => state.changeValueSearchTask.value)
    
    if(!dateInputSearch.length >= 1 ){
      searchedTask = listTask;
    } else{
      searchedTask = listTask.filter (task => {
        const taskText = task.text.toLowerCase();
        const searchText = dateInputSearch.toLowerCase();
        return taskText.includes(searchText);
      });
    }

    const dispatch = useDispatch();

    const saveTask = (newTask) => {
      const stringFieldTask = JSON.stringify(newTask);
      localStorage.setItem('TASK_V1', stringFieldTask);
      dispatch(arrayTask(newTask))
    };

    return [searchedTask, saveTask]
}

export {useSearchTask}