import { useEffect } from 'react'
import ControlButton from '../elements/ControlButton'

export default function Timer(props) {

  const { seconds, minutes, hours, days, pause, isRunning } = props.stopwatch

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

    const limit = JSON.parse(localStorage.getItem('issue')).limit
    const totalMinutes = minutes + hours * 60 + days * 60 * 24
    if (limit === totalMinutes) {
      pause()
      alert(`${limit}分経ちました。`)
    }
  }, [days, hours, minutes, pause, isRunning])

  return (
    <div className={'navbar-item'}>
      <div className={'is-size-5 mr-3'}>
        {days * 24 + hours}:{pad0(minutes)}:{pad0(seconds)}
      </div>
      <ControlButton stopwatch={props.stopwatch}/>
    </div>
  )
}
