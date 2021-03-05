import styles from '../styles/header.module.css'
import * as SiIcons from 'react-icons/si'

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        Logo
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.menuButton}>About</button>
        <button className={styles.menuButton}>Skills</button>
        <button className={styles.menuButton}>Projects</button>
        <button className={styles.menuButton}>Experience</button>
        <button className={styles.menuButton}>Education</button>
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