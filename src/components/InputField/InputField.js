import React from 'react';
import { connect } from 'react-redux';
import { PlusCircleIcon } from '@heroicons/react/solid'
import { addTodo, addText, editAddTodo } from '../../redux/action/todo.action';

const InputField = (props) => {
  const handleChange = (e) => {
    props.addText(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.selected || props.selected === 0) {
      props.editAddTodo({
        value: props.text,
        selected: props.selected
      }) 
    } else if (props.text !== '') {
      props.addTodo(props.text);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name='to-do'
          className="w-full border border-gray-400 rounded-md p-4 pr-14 relative"
          value={props.text}
          placeholder='Add to-doodle...'
          onChange={handleChange}
        />
        <button
          className={`ml-6 absolute top-3.5 right-3.5 ${props.text !== '' ? 'text-blue-600 hover:text-blue-700' : 'text-gray-400 pointer-events-none'}`}
          type='button'
          onClick={handleSubmit}
        >
          <PlusCircleIcon className='h-8 w-8'/>
        </button>
      </div>
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