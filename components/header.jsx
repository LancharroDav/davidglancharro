import Link from 'next/link'
import styles from '../styles/header.module.css'
import { SiGrav } from 'react-icons/si'

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="#home">
        <img src="/logo.png" width="100px" height="100px" className={styles.homeButton} />
      </Link>
      <div className={styles.buttonContainer}>
        <Link href="#about">
          <button className={styles.menuButton}>About Me</button>
        </Link>
        <Link href="#projects">
          <button className={styles.menuButton}>Projects</button>
        </Link>
        <Link href="#experience">
          <button className={styles.menuButton}>Experience</button>
        </Link>
      </div>
    </header>
  )
}

export default Header