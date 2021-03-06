import Head from 'next/head';
import { useEffect } from 'react';
import { Container, InputField, TodosList } from '../components';
import { connect } from 'react-redux';
import { deleteAll, persistTodos } from '../redux/action/todo.action';

const Home = ({ deleteAll, persistTodos, todos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  
  return (
    <div>
      <Head>
        <title>To Doodle</title>
        <meta name="description" content="A space to keep track of daily musings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen'>
        <Container>
          <div className='lg:w-6/12 mx-auto bg-white p-8 rounded-lg my-10 shadow-md'>
            <h1 className='text-4xl font-bold pb-2'>To Doodle</h1>
            <h2 className='text-xl pb-8'>A clean, digital space to document daily inspiration so as to not let it wander off.</h2>
            <InputField />
            <TodosList />
            {todos.length > 0 && (
              <div className='pt-8'>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  onClick={() => deleteAll()}
                >
                  Delete List
                </button>
              </div>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  deleteAll: obj => dispatch(deleteAll(obj)),
  persistTodos: obj => dispatch(persistTodos(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
