import { useEffect, useContext } from 'react'
import { MarkdownContext } from './providers/MarkdownProvider'
import { TrialsContext } from './providers/TrialsProvider'
import Trial from './Trial'

export default function Trials() {

  const { updateMarkdown } = useContext(MarkdownContext)
  const { trials, setTrials } = useContext(TrialsContext)

  useEffect(() => {
    const localTrials = localStorage.getItem('trials')
    if (!localTrials) {
      localStorage.setItem('trials', JSON.stringify([]))
    } else {
      setTrials(JSON.parse(localTrials))
    }
  }, [setTrials])

  const addTrial = () => {
    const newTrials = [
      ...trials,
      { id: Date.now(), guess: '', operation: '', result: '' },
    ]
    setTrials(newTrials)
    localStorage.setItem('trials', JSON.stringify(newTrials))
    updateMarkdown()
  }

  return (
    <>
      {trials.map((trial, i) => (
        <Trial
          key={trial.id}
          trial={trial}
          index={i + 1}
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
