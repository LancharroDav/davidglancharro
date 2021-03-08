import Link from 'next/link'
import styles from '../styles/start.module.css'

const Start = () => {
  return (
    <div id="home" className={styles.main}>
      <div className={styles.container}>
        <span className={styles.name}>David G. Lancharro</span>
        <span className={styles.slogan}>Passion for coding and audio.</span>
        <p className={styles.description}>
          I'm a junior web developer and senior audio engineer based in Berlin, Germany.
          Specialized in Ruby and Javascript and willing to add more languages to the list.
        </p>
        <Link href="#about">
          <button className={styles.moreButton}>More about me</button>
        </Link>
      </div>
    </div>
  )
}

export default Start