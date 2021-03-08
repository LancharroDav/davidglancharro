import styles from '../styles/projects.module.css'
import Link from 'next/link'
import * as BsIcons from 'react-icons/bs'

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.project1}>
        <div className={styles.screenshotContainer}>
        <a href="https://devreturns-front.vercel.app/" target="__blank">
          <img src="/screenshot-dashboard.png" alt="devReturns" className={styles.screenshot} />
        </a>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3 className={styles.projectTitle}>Lazy Cat</h3>
          <div className={styles.projectDescription}>
            <p>
            Easy-to-use Bookmark manager where you can setup your own 
            presets to open many links at the same time, saving time to start your journey.
            </p>
          </div>
          <div className={styles.projectTech}>
            <p>Ruby on Rails</p>
            <p>Next.js</p>
            <p>PostgreSQL</p>
          </div>
          <div>
            <a href="https://devreturns-front.vercel.app/" target="__blank">
              <button className={styles.launchButton}><BsIcons.BsBoxArrowUpRight /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects