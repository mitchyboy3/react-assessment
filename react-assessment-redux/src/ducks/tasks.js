const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

const initialState = {
  tasksToDo: ['cook', 'clean', 'eat'],
  tasksCompleted: ['code']
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {tasksToDo: [...state.tasksToDo, action.payload]});
    case DELETE_TASK:
      return Object.assign({}, state, {tasksToDo: state.tasksToDo.filter((task, i) => i !== action.payload)});
    case COMPLETE_TASK:
      return Object.assign({}, state, { tasksCompleted: [...state.tasksCompleted, state.tasksToDo[action.payload]],
                                        tasksToDo: state.tasksToDo.filter((task, i) => i !== action.payload)
                                      });
   default: 
    return state;
  } 
}

export function addTask(task){
  return {
    type: ADD_TASK,
    payload: task
  }
}
export function deleteTask(i){
  return {
    type: DELETE_TASK,
    payload: i
  }
}
export function completeTask(i){
  return {
    type: COMPLETE_TASK,
    payload: i
  }
}

