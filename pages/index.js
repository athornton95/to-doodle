import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { Container, InputField, TodosList } from '../components';
import { connect } from 'react-redux';
import { deleteAll, persistTodos } from '../redux/action/todo.action';

const Home = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);

  return (
    <div>
      <Head>
        <title>To Doodle</title>
        <meta name="description" content="An app to help keep track of daily art projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          <Container>
            <InputField />
            <TodosList />
            <div>
              <button onClick={() => deleteAll()}>Delete All</button>
            </div>
          </Container>
        </main>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: obj => dispatch(deleteAll(obj)),
  persistTodos: obj => dispatch(persistTodos(obj))
})

export default connect(null, mapDispatchToProps)(Home);
