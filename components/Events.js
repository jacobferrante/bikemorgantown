import Event from "./Event";
import styles from "../styles/Events.module.css";

export default function Events({ events }) {
  return (
    <section className={styles.container}>
      <div className={styles.events} id="events">
        <div>
        <img src="https://admin.bikemgtwn.com/assets/d03a5df1-fbc6-4a36-aaef-4efa0c8ddfee" className={styles.eventsImage}></img>
        </div>
        <div className={styles.event}>
          <h1>Upcoming Events</h1> 
          {events.map((event) => {
            return <Event event={event} /> 
          })}
        

        </div>
      </div>
    </section>
  );
}
