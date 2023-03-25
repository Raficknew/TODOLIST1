import React, { useState } from "react";
import styles from "./main.module.css"
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

  function createTask() {
    const newTask: Task = {
      id: nanoid(),
      taskText: task,
    };
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    setTask("");
  }

  function deleteTask(id: string){
    setTaskList(oldTaskList => oldTaskList.filter(oldTasks => oldTasks.id !== id))
  }

  function editTask(id: string){
    let editingText = prompt("Wpisz to co chcesz misiek")
    
    setTaskList((prevTaskList) => prevTaskList.map(
      (t) => t.id === id ? 
      { id: t.id , taskText: editingText ?? t.taskText } 
      : t
      ))
  }


  const taskElements = taskList.map((t) => {
    return (
      <Task 
        key = {t.id}
        taskText = {t.taskText}
        edit = {() => editTask(t.id)}
        delete={() => deleteTask(t.id)}
        />
    )
  })

 
    return (
      <div className={styles.maincontainer}>
        <div className={styles.titlecontainer}>
               <p className={styles.title}>Todo List</p>
        </div>
          <input 
            type="text" 
            name="task-text"
            id={styles.tasktext} 
            value={task} 
            onChange={valOfText}
          />
          <button
            onClick={createTask} 
            className={styles.taskbtn}>
            Add Task
          </button>
        <hr />
        {taskElements}
      </div>
    )
}

export default Main;