import { useState, useEffect } from 'react'
import ButtonStopwatch from '../molecules/ButtonStopwatch'
import SelectLimit from '../molecules/SelectLimit'
import StopwatchCounter from '../organisms/StopwatchCounter'

export default function Stopwatch({ stopwatch }) {

  const [limit, setLimit] = useState(30)

  useEffect(() => {
    setLimit(localStorage.getItem('limit'))
  }, [])

  useEffect(() => {
    localStorage.setItem('limit', limit)
  }, [limit])

  return (
    <>
      <ButtonStopwatch stopwatch={stopwatch}/>
      <StopwatchCounter stopwatch={stopwatch} limit={limit}/>
      <SelectLimit limit={limit} setLimit={setLimit}/>
    </>
  )
}
