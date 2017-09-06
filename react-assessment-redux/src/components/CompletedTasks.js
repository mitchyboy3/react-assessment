import React, { Component } from 'react';
import { connect } from 'react-redux';

class CompletedTasks extends Component {
  render() {
    const displayCompletedTasks = this.props.completedTasks.map((tasks, i)=>{
      return (
        <div key={i} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
          <h2>
            {tasks}
          </h2>
        </div>
      )
    })
    return (
      <div style={{color: 'blue'}}>
        <h1>Completed Tasks;</h1>
        {displayCompletedTasks}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    completedTasks: state.tasksCompleted
  }
}

export default connect(mapStateToProps)(CompletedTasks);
