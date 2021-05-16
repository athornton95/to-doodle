import React from 'react';
import { connect } from 'react-redux';
import { Todo } from '..';

const TodosList = ({ todos }) => (
  <div>
    {todos.map((todo, i) => <Todo todo={todo} uid={i} key={i} />)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
})
export default connect(mapStateToProps)(TodosList);
