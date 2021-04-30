import React from 'react'
import { Button } from 'react-bootstrap'
import './TasksStatus.css'

function TasksStatus({tasksList, showAll, showCompleted, showOpen}) {

    return (
        <div className="c-tasks-status">
            <label>{tasksList.reduce((total, task) => !task.complete + total,0) + ' items left'}</label>
            <div className="buttons-box">
                <Button variant="dark" onClick={()=>showAll()}>All</Button>&nbsp;
                <Button variant="dark" onClick={()=>showOpen()}>Active</Button>&nbsp;
                <Button variant="dark" onClick={()=>showCompleted()}>Completed</Button>
            </div>
        </div>
    )
}

export default TasksStatus
