import { useStopwatch } from 'react-timer-hook'
import { MdPause, MdPlayArrow } from 'react-icons/md'

export default function Timer() {
  const { seconds, minutes, hours, days, start, pause, isRunning } =
    useStopwatch({
      autoStart: false,
    })
  const label = isRunning ? <MdPause /> : <MdPlayArrow />
  const action = () => {
    isRunning ? pause() : start()
  }
  const pad0 = (number) => {
    return number.toString().padStart(2, '0')
  }

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
