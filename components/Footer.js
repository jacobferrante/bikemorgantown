import Link from 'next/link'
import styles from '../styles/Footer.module.css'



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="about"><li>About</li></Link>
          <Link href="/"><li>Events</li></Link>
          <Link href="/"><li>Routes</li></Link>
          <Link href="/"><li>Resources</li></Link>
        </ul>
      </nav>
    </footer>
  ) 
}
