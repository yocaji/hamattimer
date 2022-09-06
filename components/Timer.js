import { useStopwatch } from 'react-timer-hook'

export default function Timer() {
  const { seconds, minutes, hours, days, start, pause, reset } = useStopwatch({
    autoStart: false,
  })

  return (
    <>
      <hr />
      <section className="section">
        <div className="is-size-1">
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
        <button onClick={start} className="button mr-3">
          Start
        </button>
        <button onClick={pause} className="button mr-3">
          Pause
        </button>
        <button onClick={reset} className="button">
          Reset
        </button>
      </section>
    </>
  )
}
