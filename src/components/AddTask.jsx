import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please add A Task');
            return;
        }
        onAdd({ text });
        setText('');

    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <input type="submit" value="Save Tasks" className="btn btn-block" />
        </form>
    );
};

export default AddTask;