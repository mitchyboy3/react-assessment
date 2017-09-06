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
      enter: false
    }
    this.enter = this.enter.bind(this);
  }
  enter(e){
    this.setState({
      enter: true
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Assessment Task List</h2>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button style={{marginTop: '20px'}} 
                  className={`${this.state.enter ? 'hide' : 'show'}`}
                  onClick={this.enter}
                  
          >
            ENTER THE BEST TO DO LIST APP WITH REACT REDUX EVER MADE
          </button>
        </div>
        <div className={`${this.state.enter ? 'show' : 'hide'}`}>
          <TaskForm/>
          <div style={{marginTop: '20px'}}>------------------------------------------------------------------------------------------</div>
          <TaskList/>
          <div style={{marginTop: '20px'}}>------------------------------------------------------------------------------------------</div>
          <CompletedTasks/>
        </div>
      </div>
    );
  }
}

export default App;
