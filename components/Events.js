import Link from "next/link"; 
import styles from "../styles/Events.module.css";

export default function Events({ events, dateStr }) {
  return (
    <section className={styles.container}>
      <div className={styles.events} id="events">
        <div>
          <img
            src="https://admin.bikemgtwn.com/assets/d03a5df1-fbc6-4a36-aaef-4efa0c8ddfee"
            className={styles.eventsImage}
          ></img>
        </div>
        <div className={styles.event}>
          <h1>Upcoming Events</h1>
          {events.map((event) => {
            const options = {
              timeStyle: "short",
              dateStyle: "short",
            };
            const dateStr = new Date(event.dateTime).toLocaleString(
              "en-US",
              options
            );
            return (
              <>
                <Link href="/event/[id]" as={`/event/${event.id}`}>
                  <h3>{event.title}</h3>
                </Link>
                <p>
                  <i className="fa-solid fa-location-dot"></i> {event.location}
                </p>
                <p>
                  <i className="fa-regular fa-clock"></i> {dateStr}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
