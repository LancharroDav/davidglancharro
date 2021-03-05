import Link from 'next/link'
import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <button className={styles.homeButton}>Home</button>
      </Link>
      <div className={styles.buttonContainer}>
        <Link href="/about">
          <button className={styles.menuButton}>About Me</button>
        </Link>
        <Link href="/about">
          <button className={styles.menuButton}>Experience</button>
        </Link>
        <Link href="/about">
          <button className={styles.menuButton}>Projects</button>
        </Link>
      </div>
    </header>
  )
}

export default Header