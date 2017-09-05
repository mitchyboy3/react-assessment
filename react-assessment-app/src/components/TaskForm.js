import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    }
  }

render() {
  return (
    <div className={`${this.state.changeClass ? 'teal' : 'turquoise'}`}>
      <h1>Add a new Task</h1>
      <form>
        <input  onChange={(e)=> {this.setState({ inputValue: e.target.value })}} 
                placeholder='New Task' 
                value={this.state.inputValue}
        />
        <button onClick={e=>{
                              this.props.handleSubmit(e, this.state.inputValue)
                              this.setState({inputValue: '', changeClass: !this.state.changeClass})
                            }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
}



export default TaskForm;