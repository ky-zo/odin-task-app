import React, { useRef } from "react";

export default function Todo({
  task,
  deleteTask,
  editTask,
  toggleTodo,
  saveTask,
}) {
  const taskNameRef = useRef();
  let buttonElement = "";
  if (task.edit) {
    buttonElement = (
      <button onClick={(e) => saveTask(task.id, taskNameRef.current.innerText)}>
        Save
      </button>
    );
  } else {
    buttonElement = <button onClick={(e) => editTask(task.id)}>Edit</button>;
  }
  return (
    <li key={task.id} className="flex">
      <input
        onChange={() => toggleTodo(task.id)}
        type="checkbox"
        checked={task.complete}
      ></input>
      <div>{task.number}</div>
      <div className="task-name" contentEditable={task.edit} ref={taskNameRef}>
        {task.text}
      </div>
      <div>
        <button onClick={() => deleteTask(task.number)}>X</button>
      </div>
      <div>{buttonElement}</div>
    </li>
  );
}
