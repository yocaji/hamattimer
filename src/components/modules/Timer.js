import { useEffect, useState } from 'react'
import ControlButton from '../elements/ControlButton'
import ExpiredModal from '../elements/ExpiredModal'

export default function Timer(props) {

  const { seconds, minutes, hours, days, pause, isRunning } = props.stopwatch
  const [isOpen, setIsOpen] = useState(false)
  const [limit, setLimit] = useState()

  const pad0 = (number) => {
    return number.toString().padStart(2, '0')
  }

  useEffect(() => {
    localStorage.setItem(
      'stopwatch',
      JSON.stringify({
        seconds,
        minutes,
        hours,
        days,
      }),
    )
  }, [days, hours, minutes, seconds])

  useEffect(() => {
    if (!isRunning) return

    setLimit(JSON.parse(localStorage.getItem('issue')).limit)
    const totalMinutes = minutes + hours * 60 + days * 60 * 24
    if (limit === totalMinutes) {
      pause()
      setIsOpen(true)
    }
  }, [days, hours, minutes, pause, isRunning, limit])

  return (
    <>
      <div className={'navbar-item'}>
        <div className={'is-size-5 mr-3'}>
          {days * 24 + hours}:{pad0(minutes)}:{pad0(seconds)}
        </div>
        <ControlButton stopwatch={props.stopwatch}/>
      </div>
      <ExpiredModal isOpen={isOpen} setIsOpen={setIsOpen} limit={limit}/>
    </>
  )
}
