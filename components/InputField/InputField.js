import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/action/addTodo.action';

const InputField = (props) => {
  const [toDo, setToDo] = useState('');

  const handleChange = (e) => {
    setToDo(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(toDo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='input text' type='text' name='to-do' onChange={handleChange}/>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
})
export default connect(null, mapDispatchToProps)(InputField);