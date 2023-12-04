import styles from './tickets.module.css'
import Ticket from '../ticket'
import { useSelector } from 'react-redux'
import uniqid from 'uniqid'

const Tickets = function () {
  const ticketsData = useSelector((state) => state.ticketsData)
  const numberOfTickets = useSelector((state) => state.numberOfTickets)
  const filters = useSelector((state) => state.filters)

  const trueFilters = []
  let i = 0

  for (const key in filters) {
    if (filters[key]) {
      trueFilters.push(i - 1)
    }
    i++
  }

  let count = 0
  const tickets = ticketsData.map((item) => {
    if (
      filters.all ||
      (trueFilters.includes(item.segments[0].stops.length) && trueFilters.includes(item.segments[1].stops.length))
    ) {
      if (count < numberOfTickets) {
        count++
        return (
          <li key={uniqid()}>
            <Ticket data={item} />
          </li>
        )
      }
    }
  })

  return (
    <section className={styles.tickets}>
      <ul className={styles.list}>{tickets}</ul>
    </section>
  )
}

export default Tickets
