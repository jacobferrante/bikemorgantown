import Event from './Event'
import styles from '../styles/Events.module.css'

export default function Events({events}) {
  return (
      <div className={styles.events}> 
        <img src="https://admin.bikemgtwn.com/assets/d03a5df1-fbc6-4a36-aaef-4efa0c8ddfee"></img>
        <div className={styles.event}>
        <h1>Upcoming Events</h1>
        {events.map((event) => (
          <Event event={event} />
        ))} 
      </div>
      </div>
    ) 
}