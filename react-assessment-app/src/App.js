import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CompletedTasks from './components/CompletedTasks';

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasksToDo: ['code', 'go to class'],
      completedTasks: [],
      enter: false
    }
    this.enter = this.enter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  enter(e){
    this.setState({
      enter: true
    })
  }
  handleSubmit(e, task){
    e.preventDefault();
    const newTask = task.trim();
    if(newTask){
      const newTaskList = [...this.state.tasksToDo, newTask]
      this.setState({
        tasksToDo: newTaskList
      })
    }
  }
  completeTask(task, i){
    let newTasksState = [...this.state.tasksToDo];
    const doneTask = newTasksState.splice(i,1);
    let newCompletedTasksState = [...this.state.completedTasks, doneTask] 
    this.setState({
      tasksToDo: newTasksState,
      completedTasks: newCompletedTasksState
    })
  }
  deleteTask(task , i){
    let newTasksState = [...this.state.tasksToDo];
    newTasksState.splice(i,1);
    this.setState({
      tasksToDo: newTasksState,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Assessment Task List</h2>
        </div>
        <button style={{marginTop: '20px'}} 
                className={`${this.state.enter ? 'hide' : 'show'}`}
                onClick={this.enter}
                
        >
          ENTER
        </button>
        <div className={`${this.state.enter ? 'show' : 'hide'}`}>
          <TaskForm handleSubmit={this.handleSubmit}/>
          <div style={{marginTop: '20px'}}>------------------------------------------------------------------------------------------</div>
          <TaskList tasksToDo={this.state.tasksToDo} completeTask={this.completeTask} deleteTask={this.deleteTask}/>
          <div style={{marginTop: '20px'}}>------------------------------------------------------------------------------------------</div>
          <CompletedTasks completedTasks={this.state.completedTasks}/>
        </div>
      </div>
    );
  }
}

export default App;
