import React from 'react'
import TodoModel from '../../model/todoModel';
import './NewTask.css'

export default function NewTask({handleNewTask}) {


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleNewTask(new TodoModel(event.target.value))
            event.target.value=""
        }
    }

    return (
        <div className="new-task">
            <input type="text"className="new-task-input" placeholder="What's next?" onKeyDown={handleKeyDown} />
        </div>
    )
}
