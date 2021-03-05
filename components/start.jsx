import styles from '../styles/start.module.css'

const Start = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <span className={styles.name}>David G. Lancharro</span>
        <span className={styles.slogan}>Strong passion for coding and audio.</span>
        <p className={styles.description}>
          I'm a junior web developer and senior audio engineer based in Berlin, Germany.
          Specialized in Ruby and Javascript and willing to add more languages to the list.
        </p>
      </div>
    </div>
  )
}

export default Start