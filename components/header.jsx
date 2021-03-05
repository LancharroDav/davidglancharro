import Link from 'next/link'
import styles from '../styles/header.module.css'
import * as SiIcons from 'react-icons/si'

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <button>Home</button>
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
      <div className={styles.socialMediaButtonContainer}>
        <a href="https://www.linkedin.com/in/lancharrodav/" target="__blank" alt="linkedIn Profile">
          <button className={styles.socialMediaButton}><SiIcons.SiLinkedin /></button>
        </a>
        <a href="https://github.com/LancharroDav" target="__blank" alt="linkedIn Profile">
          <button className={styles.socialMediaButton}><SiIcons.SiGithub /></button>
        </a>
        <div>
          <button className={styles.socialMediaButton}><SiIcons.SiMailDotRu /></button>
        </div>
      </div>
    </header>
  )
}

export default Header