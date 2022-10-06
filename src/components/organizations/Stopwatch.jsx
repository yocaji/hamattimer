import { useContext, useState, useEffect } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'
import ButtonStopwatch from '../molecules/ButtonStopwatch'
import SelectLimit from '../molecules/SelectLimit'
import StopwatchCounter from '../organisms/StopwatchCounter'

export default function Stopwatch({ stopwatch }) {

  const { start, pause, isRunning } = stopwatch
  const { isStarted } = useContext(IsStartedContext)
  const [limit, setLimit] = useState(30)

  useEffect(() => {
    setLimit(localStorage.getItem('limit'))
  }, [])

  useEffect(() => {
    localStorage.setItem('limit', limit)
  }, [limit])

  return (
    <>
      <ButtonStopwatch isStarted={isStarted} start={start} pause={pause} isRunning={isRunning}/>
      <StopwatchCounter stopwatch={stopwatch} limit={limit}/>
      <SelectLimit limit={limit} setLimit={setLimit}/>
    </>
  )
}
