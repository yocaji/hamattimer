import { useEffect, useState, useContext } from 'react'
import { MarkdownContext } from './providers/MarkdownProvider'
import Trial from './Trial'

export default function Trials() {

  const [trials, setTrials] = useState([])

  const { updateMarkdown } = useContext(MarkdownContext)

  useEffect(() => {
    if (!localStorage.getItem('trials')) {
      localStorage.setItem('trials', JSON.stringify([]))
    }
    const data = JSON.parse(localStorage.getItem('trials'))
    setTrials(data)
  }, [])

  const removeTrial = async (id) => {
    const newTrials = trials.filter((trial) => {
      return trial.id !== id
    })
    setTrials(newTrials)
    saveTrials(newTrials)
  }

  const addTrial = () => {
    const newTrials = [
      ...trials,
      { id: Date.now(), guess: '', operation: '', result: '' },
    ]
    setTrials(newTrials)
    saveTrials(newTrials)
  }

  const saveTrials = (data) => {
    localStorage.setItem('trials', JSON.stringify(data))
    updateMarkdown()
  }

  return (
    <>
      {trials.map((trial, i) => (
        <Trial
          key={trial.id}
          trial={trial}
          index={i + 1}
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
