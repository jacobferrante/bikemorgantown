import { server } from "../config/index";
import styles from "../styles/EventPage.module.css";
import Link from "next/link";

export default function about({ upcomingEvents, pastEvents }) {
  return (
<>

    <div className={styles.container}>
<p className={styles.headerStatement}><strong>BikeMorgantown's</strong> events are <span className={styles.coloredText}>inclusive and welcoming.</span> We welcome all to join us and encourage you to do so! We <span className={styles.coloredText}>highly recommend</span> a helmet and lights if you are coming for a ride.  </p>
<p className={styles.headerStatement}>You can see our upcoming rides below and a few of our past recent rides to get an idea of what we usually have going on, hope to see you there!</p>
      <h2>Upcoming Events</h2>
      <div className={styles.events}>
        {upcomingEvents.map((event) => (
          <div className={styles.event}>
            <h3>{event.title}</h3>
            <h4><i className="fa-regular fa-clock"></i>{event.dateTime}</h4>
            <h4><i className="fa-solid fa-location-dot"></i>{event.location}</h4>
            <Link href="/event/[id]" as={`/event/${event.id}`}>
              <button>More Info</button>
            </Link>
          </div>
        ))}
      </div>

      <h2>Past Events</h2>
      <div className={styles.events}>
        {pastEvents.map((event) => (
          <div className={styles.event}>
            <h3>{event.title}</h3>
            <h4><i className="fa-regular fa-clock"></i>{event.dateTime}</h4>
            <h4><i className="fa-solid fa-location-dot"></i>{event.location}</h4>
            <Link href="/event/[id]" as={`/event/${event.id}`}>
              <button>More Info</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `${server}/event?filter[dateTime][_lt]=$NOW&sort=-dateTime&limit=6`
  );
  const res2 = await fetch(
    `${server}/event?filter[dateTime][_gt]=$NOW&sort[]=-dateTime`
  );
  const data = await res.json();
  const data2 = await res2.json();
  const upcomingEvents = data2.data;
  const pastEvents = data.data;
  return {
    props: {
      pastEvents,
      upcomingEvents,
    },
  };
};
