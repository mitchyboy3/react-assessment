import React, { Component } from 'react';

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
                    onClick={()=>{this.props.completeTask(tasks, i)}}
            >
              Completed
            </button>
            <button style ={{height: '25px'}}
                    onClick={()=>{this.props.deleteTask(tasks, i)}}
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

export default TaskList;