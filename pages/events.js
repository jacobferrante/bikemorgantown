import Event from "../components/Event"
import {server} from "../config/index"
import styles from "../styles/EventPage.module.css"

export default function about({events}) {
    return (
        <div className={styles.container}>
        <div className={styles.events}>
        {events.map((event) => (
            <>
           <h3>{event.title}</h3>
           <h4>{event.dateTime}</h4>
           <h4>{event.location}</h4>
           <p>{event.description}</p>
           <hr></hr> 
           </>
        ))}
        </div>
    </div>
    )
}


export const getServerSideProps = async () => {
    const res = await fetch(`${server}/event?sort[]=-dateTime`)
    const data = await res.json()
    const events = data.data
    return {
        props: {
           events 
        }
    }
}