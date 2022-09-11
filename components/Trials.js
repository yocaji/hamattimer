import { useContext, useState } from 'react'
import TrialItem from './TrialItem'
import { MarkdownContext } from './providers/MarkdownProvider'

export default function Trials() {
  const { setMarkdown } = useContext(MarkdownContext)
  const [trials, setTrials] = useState([])

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

  const updateMarkdown = () => {
    const lsTrials = JSON.parse(localStorage.getItem('trials'))
    const md = lsTrials.map((trial) => {
      return `## 試したこと
    
### 考えたことや調べたこと
${trial.guess}

### やったこと
${trial.operation}

### やった結果
${trial.result}`
    })
    setMarkdown(md.join('\n'))
  }

  return (
    <>
      {trials.map((trial) => (
        <TrialItem
          key={trial.id}
          trial={trial}
          remove={() => removeTrial(trial.id)}
          save={() => saveTrials()}
          preview={() => updateMarkdown()}
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
