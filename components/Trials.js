import { useEffect, useState } from 'react'
import Trial from './Trial'

export default function Trials() {
  const [trials, setTrials] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('trials'))
    setTrials(data)
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

  return (
    <>
      {trials &&
        trials.map((trial) => (
          <Trial
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
