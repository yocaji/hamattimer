import { useContext } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'
import { MdPause, MdPlayArrow } from 'react-icons/md'

export default function ControlBtn(props) {

  const { isStarted } = useContext(IsStartedContext)

  const { start, pause, isRunning } = props.stopwatch

  const action = () => {
    isRunning ? pause() : start()
  }
  const label = isRunning ? <MdPause/> : <MdPlayArrow/>

  return (
    <button onClick={action} className={'button is-light is-small is-rounded'} disabled={!isStarted}>
      {label}
    </button>
  )
}
