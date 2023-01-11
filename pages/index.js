import Hero from "../components/Hero";
import Services from "../components/Services";
import Events from "../components/Events";
import { server } from "../config";
export default function home({ events, services }) {
  return (
    <>
      <Hero image="e3954ed3-6f35-4012-a840-d9d05c92ac60" />

      <Services services={services} />
      <Events events={events} />
    </>
  );
}

export const getServerSideProps = async () => {
  const [res, res1] = await Promise.all([
    fetch(`${server}/service`),
    fetch(`${server}/event?filter[dateTime][_gt]=$NOW&limit=4&sort[]=dateTime`)
  ]);
  const  [servicesData, eventsData] = await Promise.all([
      res.json(),
      res1.json(),
  ]);
  
    
const services = servicesData.data;
const events = eventsData.data;

  return {
    props: {
      services,
      events,
    },
  };
};
