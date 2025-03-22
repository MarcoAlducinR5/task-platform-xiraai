import { useSelector } from "react-redux";

function useAddTask() {

    const listTask = JSON.parse(useSelector(state => state.arrayTask.value));
    const dateInputNew = useSelector(state => state.changeValueNewTask.value);
    
    let newArray = [...listTask]
            
    newArray.push({
        text: dateInputNew,
        completed: false,
    });
    
    return [newArray];
    
}

export {useAddTask}