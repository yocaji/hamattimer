import { useEffect } from 'react'
import { MdPause, MdPlayArrow } from 'react-icons/md'

export default function Timer(props) {

  const { seconds, minutes, hours, days, start, pause, isRunning } = props.stopwatch

  const pad0 = (number) => {
    return number.toString().padStart(2, '0')
  }
  const action = () => {
    isRunning ? pause() : start()
  }
  const label = isRunning ? <MdPause/> : <MdPlayArrow/>

  useEffect(() => {
    localStorage.setItem(
      'stopwatch',
      JSON.stringify({
        seconds,
        minutes,
        hours,
        days,
      })
    )
  })

  return (
    <>
      <div className={'navbar-item'}>
        <div className={'is-size-5 mr-3'}>
          {days * 24 + hours}:{pad0(minutes)}:{pad0(seconds)}
        </div>
        <button onClick={action} className={'button is-small'}>
          {label}
        </button>
      </div>
    </>
  )
}
