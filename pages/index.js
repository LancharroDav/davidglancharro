import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/header'
import Start from '../components/start'
import styles from '../styles/index.module.css'

export default function Home() {

  const [content, setContent] = useState(<Start />)

  return (
    <div className={styles.container}>
      <Head>
        <title>David G Lancharro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.contentBox}>
          {content}
        </div>
      </main>
    </div>
  )
}
