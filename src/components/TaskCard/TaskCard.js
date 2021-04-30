import React, { useEffect, useState } from 'react'
import './TaskCard.css';
import {FormCheck } from 'react-bootstrap';

export default function TaskCard({task, handleDeleteTask, handleChangeStatus}) {

    const [checked, setChecked] = useState(task.complete)

    useEffect(() => {
        setChecked(task.complete)
    }, [task.complete])

    const handleCheck= ()=>{
        handleChangeStatus(task, !checked)        
        setChecked(!checked);
    }

    const confirmDelete = () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            handleDeleteTask(task.id)
        }
    }

    return (
        <div className="card">
            <div className="task">
                <FormCheck defaultChecked={checked} onChange={handleCheck} label={task.name} />
            </div>
            <div className="task__remove-icon" onClick={confirmDelete}>X</div>
        </div>
    )
}
