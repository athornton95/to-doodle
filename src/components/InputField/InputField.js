import React from 'react';
import { connect } from 'react-redux';
import { addTodo, addText, editAddTodo } from '../../redux/action/todo.action';

const InputField = (props) => {
  const handleChange = (e) => {
    props.addText(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( props.selected || props.selected === 0) {
      props.editAddTodo({
        value: props.text,
        selected: props.selected
      }) 
    } else {
      props.addTodo(props.text);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='input text' type='text' name='to-do' value={props.text} onChange={handleChange}/>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  addText: value => dispatch(addText(value)),
  editAddTodo: obj => dispatch(editAddTodo(obj))
})

const mapStateToProps = state => ({
  text: state.text,
  selected: state.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField);