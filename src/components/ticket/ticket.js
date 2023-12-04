import styles from './ticket.module.css'
import Segment from '../segment'

const Ticket = function (props) {
  const { price, segments, carrier } = props.data
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>{price} ₽</div>
        <div className={styles.company}>
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="Company Logo" />
        </div>
      </div>
      <Segment data={segments[0]} />
      <Segment data={segments[1]} />
    </div>
  )
}

export default Ticket
