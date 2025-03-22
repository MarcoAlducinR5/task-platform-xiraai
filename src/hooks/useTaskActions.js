import { useSelector } from "react-redux";

function useTaskActions(params) {
    const listTask = JSON.parse(useSelector(state => state.arrayTask.value))

    const onComplete = (item) => {
        const tareaIndex = listTask.findIndex(task => task.text === item);
        
        let obj = Object.freeze(listTask[tareaIndex]);
        obj = { text: obj.text, completed: !obj.completed };

        let newArray = [...listTask]

        newArray.splice(tareaIndex,1,obj)

        params(newArray)
    };

    const onDelete = (item) => {
        const tareaIndex = listTask.findIndex(task => task.text === item);

        let newArray = [...listTask]

        newArray.splice(tareaIndex,1)

        params(newArray)

    };

    return [onComplete, onDelete]
}

export {useTaskActions};