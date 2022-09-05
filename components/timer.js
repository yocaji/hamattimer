import { useStopwatch } from 'react-timer-hook';

export default function Timer() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });


  return (
  <div style={{textAlign: 'center'}}>
    <div style={{fontSize: '100px'}}>
      <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    </div>
    <p>{isRunning ? 'Running' : 'Not running'}</p>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
  </div>
  );
}
