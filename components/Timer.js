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

  return (
    <>
      <div className="navbar-item">
        <div className="is-size-5 mr-3">
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
        <button onClick={action} className="button is-small">
          {label}
        </button>
      </div>
    </>
  )
}
