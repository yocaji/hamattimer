import { useContext } from 'react'
import { FormProvider } from 'react-hook-form'
import { MarkdownContext } from '../providers/MarkdownProvider'
import { TrialsContext } from '../providers/TrialsProvider'
import Issue from '../organisms/Issue'
import Trials from '../organisms/Trials'
import EditorFoot from './EditorFoot'

export default function Editor(props) {

  const { start, pause } = props.stopwatch

  const { trials, setTrials } = useContext(TrialsContext)
  const { updateMarkdown } = useContext(MarkdownContext)

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
    <>
      <div className={'tile is-child'}>
        <h2 className={'title is-5 mt-4'}>解決したいこと</h2>
        <FormProvider {...props.methods}>
          <Issue/>
        </FormProvider>
      </div>
      <div className={'tile is-child'}>
        <Trials addTrial={addTrial}/>
      </div>
      <div className={'mt-3'}>
        <EditorFoot start={start} pause={pause} addTrial={addTrial}/>
      </div>
    </>
  )
}
