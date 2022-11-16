import styles from '../../../styles/Route.module.css'
import Link from 'next/link'
import { server } from '../../../config'

export default function event({route}) {
  return (
    <div className={styles.fullRoute}>
    
    <h2>{route.title}</h2>
    <h3>ride type: {route.rideType}</h3>
    <h3>{route.mileage} Miles</h3>
    <h3>{route.elevation}</h3>
    <h3>{route.gpsLink}</h3>
    <p>{route.description}</p>


    <Link href="/#events">
    <button>Go Back</button>
    </Link>
    </div>
  ) 
}


export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/route/${context.params.id}`)
    const data = await res.json()
    const route = data.data
    return {
        props: fullEvent{
            route
        }
    }
}
