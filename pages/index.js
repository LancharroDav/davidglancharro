import Head from 'next/head'
import Header from '../components/header'
import Start from '../components/start'
import About from '../components/about'
import Projects from '../components/projects'
import SocialMedia from '../components/socialmedia'
import Experience from '../components/experience'
import Contact from '../components/contact'
import styles from '../styles/index.module.css'

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>David G Lancharro</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.contentBox}>
          <Start />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
        {/* <SocialMedia /> */}
      </main>
    </div>
  )
}

export default Home