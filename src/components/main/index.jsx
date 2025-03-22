import { TaskSearch } from './TaskSearch';
import { TaskCounter } from './taskCounter';
import { TaskList } from './taskList';
import { TaskItem } from './taskItem';
import { CreateTaskButton } from './createTaskButton';
import { useSelector } from 'react-redux';
import { ModalAddTask } from './modalAddTask';
import { useSearchTask } from '../../hooks/useSearchTask';

function Main() {

    const listTask = JSON.parse(useSelector(state => state.arrayTask.value))
    const completedTask = listTask.filter( task => task.completed ).length;
    const totalTask = listTask.length;
    const dateInputSearch = useSelector(state => state.changeValueSearchTask.value)
    const [searchedTask, saveTask] = useSearchTask();
    
    return(
        <>
            <main className='mt-[65.789px] mb-14 h-screen p-4 text-center'>
                {listTask.length === 0 
                ? 
                    <>
                        <h2 className="py-2">Presione el boton para que registre una nueva tarea</h2>
                    </>
                : 
                    <>
                        {dateInputSearch.length == 0 ? 
                        <>
                          <TaskCounter completedTask={completedTask} totalTask={totalTask} />
                        </> 
                        : 
                        <>
                          <h2 className="py-2">Se han encontado {searchedTask.length} coincidencia(s)</h2>
                        </>}

                        <TaskSearch />

                        {dateInputSearch.length == 0 ? 
                        <>
                          <TaskList>
                            {searchedTask.map((itemTask) => (
                                <TaskItem saveTaskItem={saveTask} item={itemTask.text} state={itemTask.completed} />
                            ))}
                          </TaskList>
                        </> 
                        : 
                        <>
                          {searchedTask.length == 0 ? 
                          <>
                            <div></div>
                          </> 
                          : 
                          <>
                            <TaskList>
                              {searchedTask.map((itemTask) => (
                                  <TaskItem saveTaskItem={saveTask} item={itemTask.text} state={itemTask.completed} />
                              ))}
                            </TaskList>
                          </>}
                        </>}
                    </>
                }

                <CreateTaskButton />
                
                <ModalAddTask saveTaskModal={saveTask} />
            </main>
        </>
    );
}

export {Main}