import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import TodoModel from '../../model/todoModel';
import './NewTask.css'

export default function NewTask({handleNewTask}) {

    const [wrongInput, setWrongInput] = useState(false)
    const handleKeyDown = (event) => {
        setWrongInput(false)
        if (event.key === 'Enter') {
            if (event.target.value.length>1)
            {
                handleNewTask(new TodoModel(event.target.value))
                event.target.value=""
            }
            else
                setWrongInput(true)
        }
    }

    return (
        <div className="new-task">
            <input type="text"className="new-task-input" placeholder="What's next?" onKeyDown={handleKeyDown} />
            {
                wrongInput?
                <Alert variant="danger">Your task is too short. try at least 2 characters</Alert>:null
            }
        </div>
    )
}
