import Head from 'next/head'
import Header from '../components/header'
import Start from '../components/start'
import About from '../components/about'
import Projects from '../components/projects'
import SocialMedia from '../components/socialmedia'
import styles from '../styles/index.module.css'

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>David G Lancharro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.contentBox}>
          <Start />
          <About />
          <Projects />
        </div>
        <SocialMedia />
      </main>
    </div>
  )
}

export default Home