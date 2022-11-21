import styles from "../../../styles/Events.module.css";
import Link from "next/link";
import { server } from "../../../config";

export default function event({ event }) {
  const options = {
    timeStyle: "short",
    dateStyle: "short",
  };
  const dateStr = new Date(event.dateTime).toLocaleString("en-US", options);
  return (
    <div className={styles.container}>
      <div className={styles.fullEvent}>
        <h2>{event.title}</h2>
        <h3>
          <i className="fa-regular fa-clock"></i>
          {dateStr}
        </h3>
        <h3>
          <i className="fa-solid fa-location-dot"></i>
          {event.location}
        </h3>
        <p>{event.description}</p>
        <Link href="/events">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/event/${context.params.id}`);
  const data = await res.json();
  const event = data.data;
  return {
    props: {
      event,
    },
  };
};
