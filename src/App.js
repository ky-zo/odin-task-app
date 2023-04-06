import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        number: 0,
        text: "",
        id: uniqid(),
        complete: false,
        edit: false,
      },
      tasks: [],
      lastNumber: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        number: this.state.lastNumber,
        complete: false,
        edit: false,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        number: this.state.lastNumber,
        text: "",
        id: uniqid(),
        complete: false,
        edit: false,
      },
      lastNumber: this.state.lastNumber + 1,
    });
  };

  deleteTask = (key) => {
    const index = this.state.tasks.findIndex((task) => task.number === key);
    this.state.tasks.splice(index, 1);
    this.setState({
      tasks: this.state.tasks,
    });
  };

  toggleTodo = (key) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        if (task.id === key) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });
      return { tasks: updatedTasks };
    });
  };

  editTask = (key) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        if (task.id === key) {
          return { ...task, edit: !task.edit };
        }
        return task;
      });
      return { tasks: updatedTasks };
    });
  };

  saveTask = (key, name) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        if (task.id === key) {
          return { ...task, text: name, edit: !task.edit };
        }
        return task;
      });
      return { tasks: updatedTasks };
    });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter Task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          ></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview
          tasks={tasks}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          toggleTodo={this.toggleTodo}
          saveTask={this.saveTask}
        />
      </div>
    );
  }
}

export default App;
