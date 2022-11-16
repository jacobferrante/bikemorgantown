import styles from '../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className={styles.nav}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="about"><li>About</li></Link>
          <Link href="events"><li>Events</li></Link>
          <Link href="routes"><li>Routes</li></Link>
          <Link href="resources"><li>Resources</li></Link>
        </ul>
        <button>Menu</button>
    </nav>
  ) 
}

