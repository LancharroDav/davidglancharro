import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David G Lancharro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div>David Garcia Lancharro</div>
      </main>
    </div>
  )
}
