import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.creation}>
        <p>Created by</p>
        <a href="https://www.linkedin.com/in/lancharrodav/" target="__blank" alt="linkedin-profile">
          <button className={styles.name}>David Garcia Lancharro</button>
        </a>
      </div>
      <p>Built with Next.js</p>
    </footer>
  )
}

export default Footer