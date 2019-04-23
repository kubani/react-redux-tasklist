import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';

const TaskItem = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.item.task}
        {props.item.id}
      </p>
      <button onClick={()=> props.deleteTask(props.item.id)}>Delete</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
 return {
   item: ownProps.item
 };
}

export default connect(mapStateToProps, { deleteTask })(TaskItem);