import { MdPause, MdPlayArrow } from 'react-icons/md'
import Button from '../atoms/Button'

export default function ButtonStopwatch({ isStarted, start, pause, isRunning }) {

  const action = () => {
    isRunning ? pause() : start()
  }
  const label = isRunning ? <MdPause/> : <MdPlayArrow/>

  return (
    <Button onClick={action} classNames={'is-small is-primary is-light ml-2'} disabled={!isStarted}>
      {label}
    </Button>
  )
}
