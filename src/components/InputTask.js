// import action you want
// import connect
import React from 'react';
import { connect } from 'react-redux';
import { enterTask, submitTask } from '../actions'

// props is the same as { task: state.taskReducer }
const InputTask = (props) => {
  return (
    <div>
      <input 
        type="text" 
        value={props.task.text} 
        onChange={(event)=> props.enterTask(event.target.value)}
        >
      </input>
      <button onClick={() => props.submitTask() }>Add Task</button>
    </div>
  );
}

// Jump into the state and grab/subscribe to the necessary items then return an object
const mapStateToProps = state => {
  return { task: state.taskReducer };
}


export default connect(mapStateToProps, { enterTask, submitTask })(InputTask);