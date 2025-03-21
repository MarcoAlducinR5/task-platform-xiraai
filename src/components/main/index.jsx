import { TaskSearch } from './TaskSearch';
import { TaskCounter } from './taskCounter';
import { TaskList } from './taskList';
import { TaskItem } from './taskItem';
import { CreateTaskButton } from './createTaskButton';
import { useSelector } from 'react-redux';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import { ModalAddTask } from './modalAddTask';

function Main() {

    const listTask = useSelector(state => state.arrayTask.value)
    const completedTask = listTask.filter( task => task.completed ).length;
    const totalTask = listTask.length;

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
                                <TaskItem item={itemTask.text} state={itemTask.completed} />
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
                                  <TaskItem item={itemTask.text} state={itemTask.completed} />
                              ))}
                            </TaskList>
                          </>}
                        </>}
                    </>
                }

                <CreateTaskButton />
                
                <ModalAddTask />
            </main>
        </>
    );
    
}

export {Main}