import { combineReducers } from 'redux'; 
// Circuit 1: get textbox working
// Circuit 2: get array of task text with ID key
const initialState = {
  text: '',
  taskList: [{id: 0, task: ''}],
  xid: 0
};

const taskReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ENTER_TASK':
      return {
        ...state,
        text: action.payload
      };
    // Check logic behind submitting task; button
    case 'SUBMIT_TASK':
    console.log(state);
      return {
        ...state,
        taskList: [...state.taskList, {id: ++state.xid, task: state.text}]
      };

    case 'DELETE_TASK':
      return {
        ...state,
        taskList: state.taskList.filter((tasks, index) => tasks.id !== action.payload)
      };
    default: 
      return state;
  };
};

export default combineReducers({ taskReducer: taskReducer });
