import styles from '../styles/Events.module.css'
import Link from 'next/link'

export default function Event({event}) {
  return (
          <div className={styles.event}>
            <h2>{event.title}</h2>
            <p>{event.dateTime}</p>
            <Link href="/event/[id]" as={`/event/${event.id}`}>
            <button>More Info</button>
            </Link>
          </div> 
    ) 
}