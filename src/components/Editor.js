import { useContext } from 'react'
import { FormProvider } from 'react-hook-form'
import { MarkdownContext } from './providers/MarkdownProvider'
import { TrialsContext } from './providers/TrialsProvider'
import Issue from './modules/Issue'
import Trials from './modules/Trials'
import EditorFoot from './organisms/EditorFoot'

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
      <FormProvider {...props.methods}>
        <Issue/>
      </FormProvider>
      <Trials addTrial={addTrial}/>
      <div className={'mt-6'}>
        <EditorFoot start={start} pause={pause} addTrial={addTrial}/>
      </div>
    </>
  )
}
