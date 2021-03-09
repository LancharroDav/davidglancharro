import Head from 'next/head'
import Header from './header'
import styles from '../styles/layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>David G Lancharro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.contentBox}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout