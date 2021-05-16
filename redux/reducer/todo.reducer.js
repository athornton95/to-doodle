const initState = {
  todos: [],
  text: '',
  selected: undefined
};

const setPersist = (todos) => window.localStorage.setItem('todo_list', JSON.stringify(todos));

export const addTodo = (state = initState, action) => {
  switch(action.type){
    case 'PERSIST_TODOS':
      const todos = JSON.parse(window.localStorage.getItem('todo_list'));
      return {
        ...state,
        todos: todos ? todos : []
      };
    case 'ADD_TEXT':
      return {
        ...state,
        text:action.payload
      };
    case 'ADD_TODO':
      const todo_list = state.todos.concat(action.payload);
      window.localStorage.setItem('todo_list', JSON.stringify(todo_list));
      return {
        ...state,
        todos: todo_list,
        text: ''
      };
    case 'DELETE_TODO':
      const delete_todo = state.todos.filter((todo, i) => i !== action.payload)
      setPersist(delete_todo);
      return {
        ...state,
        todos: delete_todo
      };
    case 'EDIT_TODO':
      return {
        ...state,
        text: state.todos[action.payload],
        selected: action.payload
      };
    case 'EDIT_ADD_TODO':
      const edit_add_todo = state.todos.map((todo, i) => 
        i !== action.payload.selected ? todo : action.payload.value
      );
      setPersist(edit_add_todo);
      return {
        ...state,
        todos: edit_add_todo,
        selected: undefined,
        text: ''
      };
    case 'DELETE_ALL':
      setPersist([])
      return {
        ...state,
        todos: []
      };
    default:
      return state;
  };
};