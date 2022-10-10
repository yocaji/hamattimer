import { useEffect, useContext } from 'react'
import { TrialsContext } from '../providers/TrialsProvider'
import { MarkdownContext } from '../providers/MarkdownProvider'
import Trial from './Trial'
import ButtonAddTrial from '../molecules/ButtonAddTrial'

export default function Trials() {

  const { trials, setTrials } = useContext(TrialsContext)
  const { updateMarkdown } = useContext(MarkdownContext)

  useEffect(() => {
    const localTrials = localStorage.getItem('trials')
    if (!localTrials) {
      addTrial()
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
    updateMarkdown()
    localStorage.setItem('trials', JSON.stringify(newTrials))
  }

  return (
    <div id={'trials'}>
      <h2 className={'title is-5 mt-4'}>試したこと</h2>
      {trials.map((trial, i) => (
        <Trial key={trial.id} trial={trial} index={i}/>
      ))}
      <div className={'has-text-centered'}>
        <ButtonAddTrial addTrial={addTrial}/>
      </div>
    </div>
  )
}
