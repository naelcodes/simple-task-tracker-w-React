import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
const Task = ({ task, onDelete, onToggle }) => {

    const [done, setDone] = useState(false);
    return (
        <div className='task'
            onDoubleClick={() => onToggle(task.id)}>
            <div className="task-marker">
                <input type="checkbox" value={done} onChange={(e) => setDone(e.currentTarget.checked)} />
            </div>
            <div className="task-content">
                <p className={`${done ? 'marked' : 'clear-mark'}`}>
                    {task.text}
                </p>
            </div>
            <div className="delete" >
                <FaTimes style={iconStyle} onClick={() => onDelete(task.id)} />
            </div>
        </div>
    );
};

const iconStyle = {
    color: 'white',
    cursor: 'pointer',
};
export default Task;