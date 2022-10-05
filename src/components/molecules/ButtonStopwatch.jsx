import { useContext } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'
import { MdPause, MdPlayArrow } from 'react-icons/md'
import Button from '../atoms/Button'

export default function ButtonStopwatch(props) {

  const { isStarted } = useContext(IsStartedContext)

  const { start, pause, isRunning } = props.stopwatch

  const action = () => {
    isRunning ? pause() : start()
  }
  const label = isRunning ? <MdPause/> : <MdPlayArrow/>

  return (
    <Button onClick={action} classNames={'is-small is-primary is-outlined ml-2'} disabled={!isStarted}>
      {label}
    </Button>
  )
}
