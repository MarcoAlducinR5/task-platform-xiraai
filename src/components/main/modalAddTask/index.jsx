import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { modalAddTask } from '../../../redux/actions/modalAddTaskSlice';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { changeValueNewTask } from '../../../redux/actions/changeValueNewTaskSlice';
import { useAddTask } from '../../../hooks/useAddTask';

function ModalAddTask(props){

    const modal = useSelector(state => state.modalAddTask.value)
    const stateDarkMode = useSelector(state => state.darkMode.value)

    const dispatch = useDispatch()
    const dateInputNew = useSelector(state => state.changeValueNewTask.value)
    
    const onNewValueChange = (event) => {
        dispatch(changeValueNewTask(event.target.value));
    };

    const [newArray] = useAddTask();

    const onSubmit = (event) => {
        event.preventDefault();
        
        props.saveTaskModal(newArray)
        dispatch(changeValueNewTask(''));
        dispatch(modalAddTask())
    };

    const closeModal = () => {
        dispatch(changeValueNewTask(''));
        dispatch(modalAddTask());
    };

    return ReactDOM.createPortal(
        <Dialog open={modal} onClose={() => closeModal()} className="fixed  z-10">
            <DialogBackdrop transition className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
    
            <div className="fixed bottom-60 md:bottom-0 inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel transition className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95" >
                        <form onSubmit={onSubmit} className="TodoForm">
                            <div className={`${stateDarkMode ? 'bg-white text-gray-900' : 'dark:bg-gray-800 dark:text-white'} w-[360px] md:w-full px-4 pt-5 pb-4 sm:p-6 sm:pb-4 `}>
                                <div className="flex flex-wrap sm:w-screen md:w-full">
                                    <div className="w-full md:w-1/6 mb-1">
                                        <div className={`${stateDarkMode ? 'bg-green-100' : ''} mx-auto flex size-12 shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:size-10`}>
                                            <NewReleasesOutlinedIcon htmlColor={`${stateDarkMode ? '' : '#dcfce7'} `} />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-5/6 my-3">
                                        <div className='block mb-2'>
                                            <DialogTitle as="h3" className="md:text-left text-center text-base font-semibold ">
                                                Registre la nueva tarea
                                            </DialogTitle>
                                        </div>
                                        <div className='block mb-2'>
                                            <textarea className='w-[327px] md:w-full my-2 py-1.5 pr-3 pl-1 border-2 placeholder:text-gray-500 placeholder:italic rounded-2xl' placeholder="Registre la nueva tarea..." required={true} value={dateInputNew} onChange={onNewValueChange}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${stateDarkMode ? 'bg-gray-100' : 'dark:bg-gray-700 dark:text-white'} flex justify-around md:justify-end py-3 md:p-3`}>
                                <div className='block ml-2'>
                                    <button
                                    type="submit"
                                    className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs hover:bg-green-500 md:ml-3 sm:w-auto"
                                    >
                                        <CheckCircleOutlineOutlinedIcon  />
                                    </button>
                                </div>
                                <div className='block ml-2'>
                                    <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => closeModal()}
                                    className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs hover:bg-red-500 md:ml-3 sm:w-auto"
                                    >
                                        <CancelOutlinedIcon  />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
        ,
        document.getElementById('modal')
    );
}

export {ModalAddTask};