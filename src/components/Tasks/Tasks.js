import React, {useEffect, useState} from 'react'
import {Alert, Container} from 'react-bootstrap';
import NewTask from '../NewTask/NewTask';
import TaskCard from './../TaskCard/TaskCard';
import './Tasks.css'
import TasksStatus from './../TasksStatus/TasksStatus';

export default function Tasks() {

    const [todosList, setTodosList] = useState([])
    const [filter, setFilter] = useState(0)

    const handleNewTask = (task)=>{
        setTodosList(todosList.concat([task]))    
    }
  
    const handleDeleteTask = (taskId) => {
        setTodosList(todosList.slice())
        var array = [...todosList]; // make a separate copy of the array
        const index = array.findIndex(obj => obj.id === taskId);
        if (index !== -1) {
            array.splice(index, 1);
            setTodosList(array);
        }
    }

    const showCompleted = () => {
        setFilter(1)
    }

    const showAll = () => {
        setFilter(0)
    }

    const showOpen = () => {
        setFilter(2)
    }
  
    const handleChangeStatus = (task, status) => {

        var array = [...todosList];
        const index = array.findIndex(x => x.id ===task.id);
        if (index !== -1) {
            array[index].complete = status;
            setTodosList(array);
        }

    }

    let filteredList = todosList  //All  tasks
    let todos = filteredList.length > 0;
    if(filter===1) //Completed tasks
        filteredList = todosList.filter(task => task.complete)
    else if(filter===2){ //Open tasks
        filteredList = todosList.filter(task => !task.complete)
        todos = filteredList.length > 0;
    }

    function showTasks(TasksList, handleDeleteTask, handleChangeStatus, todos){
        if (todos){
            return(
                TasksList.map((task, index) =>
                    <div key={index} className="list-group-item border-0">
                        <TaskCard key={task.id} task={task} 
                                    handleDeleteTask={handleDeleteTask} 
                                    handleChangeStatus={handleChangeStatus} />
                    </div>
                )
            )
        } else {
            return (
                <Alert variant="success">
                    No active tasks
                </Alert>
            )
        }
        
    }

    return (
            <Container className="c-tasks">
                <header>
                    <h1>Todos</h1>
                    <NewTask handleNewTask={handleNewTask} />
                </header>
                <Container className="tasks-box">
                {   
                    showTasks(filteredList,handleDeleteTask, handleChangeStatus, todos)
                }                                       
                </Container>
                <footer>
                    <TasksStatus tasksList={todosList} showAll={showAll} showCompleted={showCompleted} showOpen={showOpen} />
                </footer>

            </Container>

    )
}
