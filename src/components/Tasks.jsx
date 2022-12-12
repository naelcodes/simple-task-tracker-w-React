import Task from "./Task";


const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
        </>
    );
};

//note: state are immutable, thus can only be change through set[stateName]
export default Tasks;