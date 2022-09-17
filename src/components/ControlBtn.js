import { useEffect, useContext, useState } from 'react'
import { TrialsContext } from './providers/TrialsProvider'
import { MdPause, MdPlayArrow } from 'react-icons/md'

export default function ControlBtn(props) {

  const { trials } = useContext(TrialsContext)
  const [disabled, setDisabled] = useState(true)

  const { start, pause, isRunning } = props.stopwatch

  const action = () => {
    isRunning ? pause() : start()
  }
  const label = isRunning ? <MdPause/> : <MdPlayArrow/>

  useEffect(() => {
    console.log('ControlBtn')
    if (trials.length) {
      setDisabled(false)
    }
  }, [trials])

  return (
    <button onClick={action} className={'button is-small is-rounded'} disabled={disabled}>
      {label}
    </button>
  )
}
