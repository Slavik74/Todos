import React, { useEffect, useState } from 'react'
import {FormCheck } from 'react-bootstrap';
import { shareTextToWhatsApp } from 'share-text-to-whatsapp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './TaskCard.css';

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

    function  shareTaskToWhatsApp(message){
        shareTextToWhatsApp("You have new task: " + message); // This will open up WhatsApp and you will be shown a list of contacts you can send your message to.
    }

    return (
        <div className="card">
            <div className="task">
                <FormCheck defaultChecked={checked} onChange={handleCheck} label={task.name} />
            </div>
            
            <div className="task__icons">
                <FontAwesomeIcon className="whatsapp-icon" icon={faWhatsapp}  onClick={()=>shareTaskToWhatsApp(task.name)}/>
                <span className="task__remove-icon" onClick={confirmDelete}>X</span>
            </div>
        </div>
    )
}
