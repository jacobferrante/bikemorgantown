import styles from '../../../styles/Events.module.css'
import Link from 'next/link'
import { server } from '../../../config'

export default function event({event}) {
  return (
    <div className={styles.fullEvent}>
    <h2>{event.title}</h2>
    <h2>{event.dateTime}</h2>
    <h3>{event.location}</h3>
    <p>{event.description}</p>
    <Link href="/#events">
    <button>Go Back</button>
    </Link>
    </div>
  ) 
}


export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/event/${context.params.id}`)
    const data = await res.json()
    const event = data.data
    return {
        props: {
           event 
        }
    }
}