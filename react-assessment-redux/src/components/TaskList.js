import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask, completeTask } from './../ducks/tasks';

class TaskList extends Component {
  render() {
    const displayTasks = this.props.tasksToDo.map((tasks, i)=>{
      return (
        <div key={i} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
          <h2>
            {tasks}
          </h2>
          <div>
            <button style ={{height: '25px'}}
                    onClick={()=>{this.props.completeTask(i)}}
            >
              Completed
            </button>
            <button style ={{height: '25px'}}
                    onClick={()=>{this.props.deleteTask(i)}}
            >
              Delete
            </button>
          </div>
        </div>
      )
    })
    return (
      <div style={{color: 'green'}}>
        <h1>Tasks Needed to Get Done;</h1>
        {displayTasks}
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    tasksToDo: state.tasksToDo
  }
}

export default connect(mapStateToProps, { deleteTask, completeTask })(TaskList);