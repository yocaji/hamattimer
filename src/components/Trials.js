import { useEffect, useContext } from 'react'
import { MarkdownContext } from './providers/MarkdownProvider'
import { TrialsContext } from './providers/TrialsProvider'
import Trial from './Trial'

export default function Trials() {

  const { updateMarkdown } = useContext(MarkdownContext)
  const { trials, setTrials } = useContext(TrialsContext)

  useEffect(() => {
    if (!localStorage.getItem('trials')) {
      localStorage.setItem('trials', JSON.stringify([]))
    }
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
