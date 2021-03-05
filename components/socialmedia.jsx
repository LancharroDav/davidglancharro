import styles from '../styles/socialmedia.module.css'
import * as SiIcons from 'react-icons/si'

const SocialMedia = () => {
  return (
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
  )
}

export default SocialMedia