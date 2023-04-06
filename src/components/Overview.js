import React from "react";
import Todo from "./Todo";

const Overview = (props) => {
  const { tasks, deleteTask, editTask, toggleTodo, saveTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <Todo
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleTodo={toggleTodo}
            saveTask={saveTask}
          />
        );
      })}
    </ul>
  );
};

export default Overview;
