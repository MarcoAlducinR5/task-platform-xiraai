function TaskCounter(props) {
    return (
        <>
            <h2 className="py-2">Has completado {props.completedTask} de {props.totalTask} tareas</h2>
        </>
    );
    
}

export {TaskCounter}