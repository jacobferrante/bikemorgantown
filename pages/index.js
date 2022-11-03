import Hero from '../components/Hero'
import Services from '../components/Services'
import Events from '../components/Events'
import { server } from '../config'
import styles from '../styles/Home.module.css'

export default function home({ events, services }) {
  return (
      <>      
      
        <Hero /> 
        <Services services={services} />
        <Events events={events} /> 

      </> 
  )
}


export const getServerSideProps = async () => {
    const res = await fetch(`${server}/services`)
    const res1 = await fetch(`${server}/event?filter[dateTime][_gt]=$NOW&limit=3&sort[]=-dateTime`)
    const data = await res.json()
    const data2 = await res1.json()
    const services = data.data
    const events = data2.data
    return {
        props: {
           services,
           events 
        }
    }
}
