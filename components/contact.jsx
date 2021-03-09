import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <section>
      <h1 id="contact">Get in touch</h1>
      <p>
        Currently I'm looking for junior or intern positions. If you think I'm a match for your team or just want to chat about coding/music/philosophy..., contact me!
      </p>
      <a href="mailto:davidglancharro@gmail.com" target="__blank" rel="noopener noreferer">
        <button className={styles.contactButton}>Send me a message</button>
      </a>
    </section>
  )
}

export default Contact