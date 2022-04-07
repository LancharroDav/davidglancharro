import styles from '../styles/about.module.css'

const About = () => {
  const stack = ["Ruby on Rails", "Typescript", "React", "Node.js", "MongoDB", "PostgreSQL", "Kubernetes", "Docker" ]
  return (
    <section id='about' className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <p>
            Passionate about coding and audiovisuals, very curious and new challenges seeker.
            These are some words that show a sample of my profile.
          </p>
          <p>
            I understand the power of teamwork and how several minds thinking together can tackle major challenges.
          </p>
          <p>
            I'm committed to building high-quality and reliable products.
            To that end, I focus on the details because that turns a good product into a great product.
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <p className={styles.skillsTitle}>Most used technologies</p>
          <div className={styles.skillsList}>
            {stack.map(tool => {
              return [
                <ul className={styles.stack}>{tool}</ul>
              ]
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About