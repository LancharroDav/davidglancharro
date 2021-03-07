import styles from '../styles/about.module.css'

const About = () => {
  return (
    <div id='about' className={styles.container}>
      <h1 className={styles.title}>
        <p>About Me</p>
      </h1>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <p>
            As a self-taught engineer, I've developed excellent analysis and organizational ability during the learning process.
            After starting some online development courses, I realized the best way to learn was building a
            useful tool from scratch. So I decided to develop a webapp that helps me in my daily workflow.
          </p>
          <p>
            I used Ruby on Rails for the backend and REST API, PostgreSQL for the database, and
            Next.js for the frontend to develop this project.
          </p>
          <p>
            Doing quality work is very important to me, so I looked for a mentor to support me in this learning
            process. He is Pedro Piñera Buendía, Engineering Manager in the React Native
            Foundations team at Shopify. He has been and still is the one I ask my doubts to and who guides me so
            that my code maintains a professional quality.
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <h3 className={styles.skillsTitle}>Most used Technologies:</h3>
          <div className={styles.skillsList}>
            <div className={styles.skills}>
              <li>Ruby on Rails</li>
              <li>Javascript</li>
              <li>Next.js</li>
              <li>React</li>
            </div>
            <div className={styles.skills}>
              <li>{'HTML & CSS'}</li>
              <li>PostgreSQL</li>
              <li>Git</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About