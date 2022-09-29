import { useEffect, useState } from 'react'
import ControlButton from '../elements/ControlButton'
import ExpiredModal from '../elements/ExpiredModal'
import SelectLimit from '../elements/SelectLimit'

export default function Stopwatch(props) {

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

    setLimit(localStorage.getItem('limit'))
    const totalMinutes = minutes + hours * 60 + days * 60 * 24
    if (limit === String(totalMinutes)) {
      pause()
      setIsOpen(true)
    }
  }, [days, hours, minutes, pause, isRunning, limit])

  return (
    <>
      <div className={'navbar-item'} id={'stopwatch'}>
        <ControlButton stopwatch={props.stopwatch}/>
        <span className={'is-size-5 ml-2'} id={'stopwatch-counter'}>
          {days * 24 + hours}:{pad0(minutes)}:{pad0(seconds)}
        </span>
        <SelectLimit/>
      </div>
      <ExpiredModal isOpen={isOpen} setIsOpen={setIsOpen} limit={limit}/>
    </>
  )
}
