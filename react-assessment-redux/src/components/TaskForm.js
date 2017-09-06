import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from './../ducks/tasks';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const newTask = this.state.inputValue.trim();
    if(newTask){
      this.props.addTask(newTask)
      this.setState({inputValue: ''})
    }
  }
render() {
  return (
    <div>
      <h1>Add a new Task</h1>
      <form>
        <input  onChange={(e)=> {this.setState({ inputValue: e.target.value })}} 
                placeholder='New Task' 
                value={this.state.inputValue}
        />
        <button onClick={this.handleSubmit}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
}



export default connect(null, { addTask })(TaskForm);