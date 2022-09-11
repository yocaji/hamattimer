import { useEffect, useState } from 'react'
import TrialItem from './TrialItem'

export default function Trials() {
  const [trials, setTrials] = useState([])

  useEffect(() => {
    // setTrials(JSON.parse(localStorage.getItem('trials')))
  }, [])

  const removeTrial = async (id) => {
    const newTrials = [
      ...trials.slice(0, id - 1),
      ...trials.slice(id, trials.length),
    ]
    setTrials(newTrials)
    saveTrials(newTrials)
  }
  const addTrial = () => {
    const newTrials = [
      ...trials,
      { id: trials.length + 1, guess: '', operation: '', result: '' },
    ]
    setTrials(newTrials)
    saveTrials(newTrials)
  }
  const saveTrials = (data) => {
    localStorage.setItem('trials', JSON.stringify(data))
  }

  if (trials) {
    return (
      <>
        {trials.map((trial) => (
          <TrialItem
            key={trial.id}
            trial={trial}
            remove={() => removeTrial(trial.id)}
            save={() => saveTrials()}
          />
        ))}
        <section className={'section has-text-centered'}>
          <button className={'button mr-3'}>解決した！</button>
          <button className={'button'} onClick={() => addTrial()}>
            別の方法を試す
          </button>
        </section>
      </>
    )
  }
  return (
    <section className={'section has-text-centered'}>
      <button className={'button mr-3'}>解決した！</button>
      <button className={'button'} onClick={() => addTrial()}>
        別の方法を試す
      </button>
    </section>
  )
}
