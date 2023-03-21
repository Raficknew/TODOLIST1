import React, { useState } from "react";
import "./main.css"
import Task from "../task/task";
import { nanoid } from 'nanoid'

interface Task {
  id: string,
  taskText: string,
}


const Main: React.FC = () => {

 
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState<Task[]>([])

  function valOfText (event: React.ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  function createTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask: Task = {
      id: nanoid(),
      taskText: task,
    };
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    setTask("");
  }

  function deleteTask(id: string){
    console.log(id)

    setTaskList(oldTaskList => oldTaskList.filter(oldTasks => oldTasks.id !== id))
    
  }

  function editTask(){
    console.log("edytuje")
  }


  const taskElements = taskList.map((t) => {
    return (
      <Task 
        key = {t.id}
        taskText = {t.taskText}
        edit = {editTask}
        delete={() => deleteTask(t.id)}
        />
    )
  })

 
    return (
      <div className="main-container">
        <div className="title-container">
               <p className="title">Todo List</p>
        </div>
        <form onSubmit={createTask}>
          <input 
            type="text" 
            name="task-text"
            id="task-text" 
            value={task} 
            onChange={valOfText}
            required
          />
          <button className="task-btn">Add Task</button>
        </form>
        <hr />
        {taskElements}
      </div>
    )
}

export default Main;