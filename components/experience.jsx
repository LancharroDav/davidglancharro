import { useState } from 'react'
import styles from '../styles/experience.module.css'
import * as RiIcons from 'react-icons/ri'

const Experience = () => {

  const [jobSelected, setJobselected] = useState('Chatterbug')

  const Chatterbug = () => {
    return (
      <div className={styles.jobDescription}>
        <div>
          <p>Analysis of conversion and retention of new users on the platform.</p>
          <p>Analyse and classify types of users by platform's usage.</p>
          <p>Create predictive models to improve new users' retention.</p>
        </div>
        <div className={styles.jobTitle}>
          <p className={styles.jobCompany}>Stack: </p>
          <p>Python, Jupiter Notebooks, Scikit-Learn, Numpy, Pandas, Plotly, Mode.com, Slack.</p>
        </div>
        <div className={styles.jobTitle}>
          <p className={styles.jobCompany}>References: </p>
          <p>Will Taylor, Senior Full Stack Developer at Chatterbug</p>
        </div>
      </div>
    )
  }

  const Convergys = () => {
    return (
      <div className={styles.jobDescription}>
        <div>
          <p>Provide support and marketing advice for companies who use Facebook Ads (B2B).</p>
          <p>Prepare, analyze, and optimize their commercial campaigns.</p>
          <p>Setup and advice on usage of tracking tools such as Facebook Pixel.</p>
          <p>Supervise and manage 9 different markets (Spanish speakers, DACH, Israel, Turkey, Holland, France, Russia, UK, and Arabic speaking countries)</p>            
        </div>
        <div className={styles.jobTitle}>
          <p className={styles.jobCompany}>Stack: </p>
          <p>Facebook Ads, Pixel Facebook, Facebook Catalogues, Facebook’s analisys tools.</p>
        </div>
        <div className={styles.jobTitle}>
          <p className={styles.jobCompany}>References: </p>
          <p>José Carias, SME's Team Manager</p>
        </div>
      </div>
    )
  }

  const Freelance = () => {
    return (
      <div className={styles.jobDescription}>
        <div>
          <p>Sound design for audiovisual projects such as advertisements, music album recording, and live shooting</p>
          <p>Broadcasts for TV such as La Sexta, Movistar+ or Barça TV.</p>
          <p>Manager for teams up to 6 audio engineers</p>
          <p>Coordination and technical management of theatre Sala Polivalent de Montmeló.</p>
        </div>
        <div className={styles.jobTitle}>
          <p className={styles.jobCompany}>Stack: </p>
          <p>Pro Tools HD, Izotope RX, Skype, Waves, Adobe Premiere</p>
        </div>
        <div className={styles.jobTitle}>
          <p className={styles.jobCompany}>References: </p>
          <div style={{display: "flex", flexDirection: "column"}}>
            <p>Oriol Garcia Riu, Founder and CTO at Carnaby Studios</p>
            <p>Mario Crespo, Audio Engineer Manager at Transperfect</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Relevant Experience</h1>
      <div className={styles.jobsContainer}>
        <div id="experience" className={styles.jobsTitlelist}>
          <button className={styles.job} onClick={e => setJobselected('Chatterbug')} style={{borderBottom: jobSelected === 'Chatterbug' ? '2px solid var(--remark)' : null}}>
            <div className={styles.jobTitle}>
              <h3>Data Scientist intern at </h3>
              <h3 className={styles.jobCompany}>Chatterbug</h3>
            </div>          
          </button>
          <button className={styles.job} onClick={e => setJobselected('Freelance')} style={{borderBottom: jobSelected === 'Freelance' ? '2px solid var(--remark)' : null}}>
            <div className={styles.jobTitle}>
              <h3>Audio Engineer </h3>
              <h3 className={styles.jobCompany}>Freelance</h3>
            </div>
          </button>
          <button className={styles.job} onClick={e => setJobselected('Convergys')} style={{borderBottom: jobSelected === 'Convergys' ? '2px solid var(--remark)' : null}}>
            <div className={styles.jobTitle}>
              <h3>Subject Matter Expert at </h3>
              <h3 className={styles.jobCompany}>Convergys</h3>
            </div>          
          </button>
        </div>
        {jobSelected === 'Chatterbug' ? Chatterbug() : null}
        {jobSelected === 'Freelance' ? Freelance() : null}
        {jobSelected === 'Convergys' ? Convergys() : null}
      </div>
    </div>
  )
}

export default Experience