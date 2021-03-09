import Link from 'next/link'
import styles from '../styles/header.module.css'
import { SiGrav } from 'react-icons/si'

const Header = () => {

  const navMenu = ["about", "projects", "experience", "contact"]

  return (
    <header className={styles.container}>
      <Link href="#home">
        <img src="/logo.png" width="100px" height="100px" className={styles.homeButton} />
      </Link>
      <div className={styles.buttonContainer}>
        {navMenu.map(section => {
          return [
            <Link href={`#${section}`}>
              <button className={styles.menuButton}>{section}</button>
            </Link>
          ]
        })}
      </div>
    </header>
  )
}

export default Header