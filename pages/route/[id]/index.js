import styles from '../../../styles/Route.module.css'
import Link from 'next/link'
import { server } from '../../../config'

export default function event({route}) {
  return (
    
<div className={styles.container}>
    <div className={styles.fullRoute}>
        <h2 className={styles.headerText}>{route.title}</h2>
        <img className={styles.headerImage} src={"https://admin.bikemgtwn.com/assets/" + route.headerImage}/>
        <p className={styles.description}>{route.description}</p>
        <h3>terrain: {route.rideType}</h3>
        <h3>distance: {route.mileage} miles</h3>
        <h3>elevation gain: {route.elevation}ft</h3>
        <Link href={route.gpsLink}>Ride with GPS</Link> 
        <img className={styles.contentImage} src={"https://admin.bikemgtwn.com/assets/" + route.contentImage}/>
        <Link href="/routes">
            <button className={styles.homeButton}>Go Back</button>
        </Link>
    </div>
 </div>
  
  ) 
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/route/${context.params.id}`)
    const data = await res.json()
    const route = data.data
    return {
        props: {
            route
        }
    }
}
