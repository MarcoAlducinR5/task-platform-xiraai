import { TaskSearch } from './TaskSearch';
import { TaskCounter } from './taskCounter';
import { TaskList } from './taskList';
import { TaskItem } from './taskItem';
import { CreateTaskButton } from './createTaskButton';
import { useSelector } from 'react-redux';

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
        const todoText = task.text.toLowerCase();
        const searchText = dateInputSearch.toLowerCase();
        return todoText.includes(searchText);
      });
    }
    
    return(
        <>
            <main className='mt-[65.789px] mb-14 sm:h-screen md:h-full p-4 text-center'>
                {listTask.length === 0 
                ? 
                    <>
                        <h2 className="py-2">Presione el boton para que registre una nueva tarea</h2>
                    </>
                : 
                    <>
                        <TaskCounter completedTask={completedTask} totalTask={totalTask} />

                        <TaskSearch />

                        <TaskList>
                            {searchedTask.map((itemTask) => (
                                <TaskItem item={itemTask.text} state={itemTask.completed} />
                            ))}
                        </TaskList>
                    </>
                }

                <CreateTaskButton />
                
            </main>
        </>
    );
    
}

export {Main}