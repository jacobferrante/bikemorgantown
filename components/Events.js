import Event from './Event'
import styles from '../styles/Events.module.css'

export default function Events({events}) {
  return (
      <div className={styles.events}>     
        {events.map((event) => (
          <Event event={event} />
        ))} 
      </div>
    ) 
}