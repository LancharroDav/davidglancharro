import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <section className={styles.container}>
      <h1 id="contact" className={styles.title}>Get in touch</h1>
      <p className={styles.ctaText}>
        Currently I'm looking for junior or intern positions. 
        If you think I'm a match for your team or just want to chat about coding, music, philosophy... contact me!
      </p>
      <a href="mailto:davidglancharro@gmail.com" target="__blank" rel="noopener noreferer">
        <button className={styles.contactButton}>Contact me</button>
      </a>
    </section>
  )
}

export default Contact