import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

const TaskCollection = (props) => {
  return (
    <div>
      <ul>
      {
        props.task.map(item => {
          return <TaskItem item={item} key={item.id} />
        })
      }
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { task: state.taskReducer.taskList };
};

export default connect(mapStateToProps)(TaskCollection)