import Hero from '../components/Hero'
import Services from '../components/Services'
import Events from '../components/Events'
import { server } from '../config'
export default function home({ events, services}) {
  return (
      <>      
      
        <Hero 
        image = "e3954ed3-6f35-4012-a840-d9d05c92ac60" 
        />

        
        <Services services={services} />
        <Events events={events} />

      </> 
  )
}


export const getServerSideProps = async () => {
    const res = await fetch(`${server}/service`)
    const res1 = await fetch(`${server}/event?filter[dateTime][_gt]=$NOW&limit=4&sort[]=-dateTime`)
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
