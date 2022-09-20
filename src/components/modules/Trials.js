import { useEffect, useContext } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'
import { TrialsContext } from '../providers/TrialsProvider'
import Trial from './Trial'
import { MdAdd } from 'react-icons/md'

export default function Trials(props) {

  const { isStarted, setIsStarted } = useContext(IsStartedContext)
  const { trials, setTrials } = useContext(TrialsContext)

  useEffect(() => {
    const localTrials = localStorage.getItem('trials')
    if (!localTrials) {
      localStorage.setItem('trials', JSON.stringify([]))
    } else {
      setTrials(JSON.parse(localTrials))
    }
  }, [setTrials])

  useEffect(() => {
    if (trials.length) {
      setIsStarted(true)
    } else {
      setIsStarted(false)
    }
  }, [setIsStarted, trials.length])

  if (!isStarted) return

  return (
    <>
      {trials.map((trial, i) => (
        <Trial
          key={trial.id}
          trial={trial}
          index={i + 1}
        />
      ))}
      <div className={'has-text-centered'}>
        <button className={'button is-light'} onClick={() => props.addTrial()}>
          <MdAdd className={'mr-1'}/>追加する
        </button>
      </div>
    </>
  )
}
