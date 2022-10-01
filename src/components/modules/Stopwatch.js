import { useEffect, useState } from 'react'
import ControlButton from '../elements/ControlButton'
import SelectLimit from '../elements/SelectLimit'
import Modal from '../elements/Modal'
import ModalExpired from '../elements/ModalExpired'

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
    <div className={'navbar-end'}>
      <div className={'navbar-item'} id={'stopwatch'}>
        <ControlButton stopwatch={props.stopwatch}/>
        <div className={'is-size-3 ml-2'} id={'stopwatch-counter'}>
          {days * 24 + hours}:{pad0(minutes)}<span className={'is-size-6 ml-1'}>{pad0(seconds)}</span>
        </div>
        <SelectLimit/>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'調子はどうですか？'}>
        <ModalExpired limit={limit}/>
      </Modal>
    </div>
  )
}
