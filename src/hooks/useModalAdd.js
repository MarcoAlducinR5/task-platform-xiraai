import { useDispatch } from "react-redux";
import { modalAddTask } from "../redux/actions/modalAddTaskSlice";

function useModalAdd() {
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(modalAddTask())
    };

    return [openModal];
}

export {useModalAdd}