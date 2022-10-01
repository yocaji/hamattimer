import { useContext } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'
import { TrialsContext } from '../providers/TrialsProvider'

export default function StartButton(props) {

  const { trials } = useContext(TrialsContext)
  const { setIsStarted } = useContext(IsStartedContext)
  if (trials.length) return

  const handleClick = () => {
    props.start()
    props.addTrial()
    setIsStarted(true)
  }

  return (
    <button type={'button'} className={'button is-primary is-rounded is-medium is-fullwidth'} onClick={handleClick}>
      スタート
    </button>
  )
}
