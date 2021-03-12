import Head from 'next/head'
import Header from '../components/header'
import Start from '../components/start'
import About from '../components/about'
import Projects from '../components/projects'
import SocialMedia from '../components/socialmedia'
import Experience from '../components/experience'
import Contact from '../components/contact'
import Footer from '../components/footer'
import styles from '../styles/index.module.css'

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>David G Lancharro</title>
        <link rel="icon" href="/logo.png" />
        <meta property="og:url" content="davidglancharro.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="David G. Lancharro" />
        <meta 
          property="og:description"
          content="Know more about David G. Lancharro checking into my website!"
        />
        <meta property="og:image" content={"/logo.png"} />
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
        <Footer />
        <SocialMedia />
      </main>
    </div>
  )
}

export default Home