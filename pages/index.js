import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { InputField } from '../components';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>To Doodle</title>
        <meta name="description" content="An app to help keep track of daily art projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <main className={styles.main}>
          <h1>app</h1>
          <InputField />
        </main>
      </Provider>
    </div>
  )
}
