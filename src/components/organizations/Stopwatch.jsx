import { useState, useEffect } from 'react'
import ButtonStopwatch from '../molecules/ButtonStopwatch'
import SelectLimit from '../molecules/SelectLimit'
import StopwatchCounter from '../organisms/StopwatchCounter'

export default function Stopwatch({ stopwatch }) {

  const { seconds, minutes, hours, days, start, pause, isRunning } = stopwatch
  const [limit, setLimit] = useState(30)

  useEffect(() => {
    setLimit(localStorage.getItem('limit'))
  }, [])

  useEffect(() => {
    localStorage.setItem('limit', limit)
  }, [limit])

  return (
    <>
      <ButtonStopwatch start={start} pause={pause} isRunning={isRunning}/>
      <SelectLimit limit={limit} setLimit={setLimit}/>
      <StopwatchCounter limit={limit} seconds={seconds} minutes={minutes} hours={hours} days={days} pause={pause} isRunning={isRunning}/>
    </>
  )
}
