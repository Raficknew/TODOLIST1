import React from "react";
import styles from "./task.module.css"
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"


const Task = (props: any) => {
  return (
    <div className={styles.taskcontainer}>
      <div className={styles.textVal}>
        <p className={styles.text}>{props.taskText}</p>
      </div>
      <div className={styles.taskfunctionality }>
        <AiFillEdit
        style={
          {
            color: "rgba(255, 255, 0, 0.63)", 
            cursor: "pointer"
          }
          }
          onClick={props.edit}
          />
        <AiFillDelete 
          style={
          {
            color: "rgba(208, 0, 0, 0.64)",
            cursor: "pointer"
          }
        }
          onClick={props.delete}
          />
      </div>
    </div>
  )
}

export default Task;