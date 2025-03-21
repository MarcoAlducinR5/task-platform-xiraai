import { TaskSearch } from './TaskSearch';
import { TaskCounter } from './taskCounter';
import { TaskList } from './taskList';
import { TaskItem } from './taskItem';
import { CreateTaskButton } from './createTaskButton';

function Main() {
    let listTask = [
        {
          task: 'Leslie Alexander',
          state: true,
        },
        {
          task: 'Michael Foster',
          state: false,
        },
        {
          task: 'Dries Vincent',
          state: true,
        },
        {
          task: 'Lindsay Walton',
          state: false,
        },
        {
          task: 'Courtney Henry',
          state: true,
        },
        {
          task: 'Tom Cook',
          state: false,
        },
    ];

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
                        <TaskCounter />

                        <TaskSearch />

                        <TaskList>
                            {listTask.map((itemTask) => (
                                <TaskItem item={itemTask.task} state={itemTask.state} />
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