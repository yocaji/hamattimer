import { useEffect } from 'react'
import ControlBtn from './ControlBtn'

export default function Timer(props) {

  const { seconds, minutes, hours, days, pause } = props.stopwatch

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
    const limit = JSON.parse(localStorage.getItem('issue')).limit
    const totalMinutes = minutes + hours * 60 + days * 60 * 24
    if (limit === totalMinutes) {
      pause()
      console.log('limit === totalMinutes')
      alert(`${limit}分経ちました。`)
    }
  }, [days, hours, minutes, pause])

  return (
    <div className={'navbar-item'}>
      <div className={'is-size-5 mr-3'}>
        {days * 24 + hours}:{pad0(minutes)}:{pad0(seconds)}
      </div>
      <ControlBtn stopwatch={props.stopwatch}/>
    </div>
  )
}
