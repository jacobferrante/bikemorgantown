import Link from 'next/link'

export default function Event({event}) {
  return (
      <> 
        <Link href="/event/[id]" as={`/event/${event.id}`}>
          <h3>{event.title}</h3>
        </Link>
          <p>{event.dateTime}</p>
          <p>{event.location}</p>
      </>
    ) 
}