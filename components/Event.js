import Link from 'next/link'

export default function Event({event}) { 
  return (
      <> 
        <Link href="/event/[id]" as={`/event/${event.id}`}>
          <h3>{event.title}</h3>
        </Link> 
          <p><i class="fa-solid fa-location-dot"></i>   {event.location}</p>
          <p><i class="fa-regular fa-clock"></i>     {event.dateTime}</p>
      </>
    ) 
}