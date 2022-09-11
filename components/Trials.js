import { useState } from 'react'
import TrialItem from './TrialItem'

export default function Trials() {
  const [trials, setTrials] = useState([
    { id: 1, guess: '考えたこと', operation: '試したこと', result: '結果' },
    {
      id: 2,
      guess: '考えたこと２',
      operation: '試したこと２',
      result: '結果２',
    },
  ])
  const removeTrial = (id) => {
    console.log(id)
    const removedTrials = trials.filter((trial) => {
      return trial.id === !id
    })
    setTrials(removedTrials)
  }
  const addTrial = () => {
    setTrials([
      ...trials,
      { id: trials.length + 1, guess: '', operation: '', result: '' },
    ])
  }

  return (
    <>
      {trials.map((trial) => (
        <TrialItem key={trial.id} trial={trial} remove={() => removeTrial()} />
      ))}
      <section className={'section has-text-centered'}>
        <button className={'button mr-3'}>解決した！</button>
        <button className={'button'} onClick={addTrial}>
          別の方法を試す
        </button>
      </section>
    </>
  )
}
