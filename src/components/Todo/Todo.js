import { connect } from 'react-redux';
import { editTodo, deleteTodo } from '../../redux/action/todo.action';
import { TrashIcon, PencilIcon, CircleCheckIcon } from '@heroicons/react/solid'


const Todo = ({ todo, uid, deleteTodo, editTodo, selected, text }) => {
  return (
    <div className='w-full flex justify-between items-center pl-6 pr-4 py-2'> 
      <div className='flex overflow-x-auto items-center'>
        <span className='text-gray-300 text-xs'>{uid + 1}</span>
        <p className='pl-4 text-lg'>{selected === uid ? text : todo}</p>
      </div>    
      <div className='flex text-gray-500 ml-2'>
        <PencilIcon onClick={() => editTodo(uid)} className='h-4 w-4'/>
        <TrashIcon onClick={() => deleteTodo(uid)} className='ml-2 h-4 w-4'/>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  text: state.text,
  selected: state.selected
})

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
