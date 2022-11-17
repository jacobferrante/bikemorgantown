import Link from 'next/link'

export default function Event({event}) { 
  return (
      <> 
        <Link href="/event/[id]" as={`/event/${event.id}`}>
          <h3>{event.title}</h3>
        </Link> 
          <p><i className="fa-solid fa-location-dot"></i>   {event.location}</p>
          <p><i className="fa-regular fa-clock"></i>     {event.dateTime}</p>
      </>
    ) 
}