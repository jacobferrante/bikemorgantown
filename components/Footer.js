import Link from 'next/link'
import styles from '../styles/Footer.module.css'



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
       <a href="https://www.instagram.com/bikemgtwn/"><i className={"fa-brands fa-instagram"}></i></a> 
       <a href="https://www.facebook.com/BikeMorgantown"><i className={"fa-brands fa-facebook"}></i></a> 
      </div>
      <nav className={styles.nav}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/events"><li>Events</li></Link>
          <Link href="/routes"><li>Routes</li></Link>
          <Link href="/resources"><li>Resources</li></Link>
          </ul>
      </nav>

      <div className={styles.credits}>
        <p>Website Designed & Developed by <br></br> <a href="https://jacobferrante.dev">Jacob Ferrante</a></p>
      </div>
    </footer>
  ) 
}
