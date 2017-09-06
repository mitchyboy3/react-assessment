import { createStore } from 'redux';
import taskReducer from './tasks';

export default createStore(taskReducer);