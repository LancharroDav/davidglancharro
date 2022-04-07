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
      <a href="mailto:davidglancharro@gmail.com" target="__blank" rel="noopener noreferer">
        <button className={styles.socialMediaButton}><SiIcons.SiMaildotru /></button>
      </a>
    </div>
  )
}

export default SocialMedia