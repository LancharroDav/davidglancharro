import Link from 'next/link'
import styles from '../styles/header.module.css'
import { SiGrav } from 'react-icons/si'

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="#home">
        <button className={styles.homeButton}>Home</button>
      </Link>
      <div className={styles.buttonContainer}>
        <Link href="#about">
          <button className={styles.aboutButton}>About Me</button>
        </Link>
        <Link href="#projects">
          <button className={styles.projectsButton}>Projects</button>
        </Link>
        <Link href="#experience">
          <button className={styles.experienceButton}>Experience</button>
        </Link>
      </div>
    </header>
  )
}

export default Header