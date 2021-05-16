import { connect } from 'react-redux';
import { editTodo, deleteTodo } from '../../redux/action/todo.action';

const Todo = ({ todo, uid, deleteTodo, editTodo, selected, text }) => (
  <div>      
    <div onClick={() => editTodo(uid)}>
      {selected === uid ? text : todo}
    </div>
    <div onClick={() => deleteTodo(uid)}>
      delete
    </div>
  </div>
);

const mapStateToProps = state => ({
  text: state.text,
  selected: state.selected
})

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
