import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { InputField, TodosList } from '../components';
import { connect } from 'react-redux';
import { deleteAll, persistTodos } from '../redux/action/todo.action';

const Home = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);

  return (
    <div className={styles.container}>
      <Head>
        <title>To Doodle</title>
        <meta name="description" content="An app to help keep track of daily art projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <h1>app</h1>
          <InputField />
          <TodosList />
          <div>
            <button onClick={() => deleteAll()}>Delete All</button>
          </div>
        </main>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: obj => dispatch(deleteAll(obj)),
  persistTodos: obj => dispatch(persistTodos(obj))
})

export default connect(null, mapDispatchToProps)(Home);
