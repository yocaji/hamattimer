import { useContext } from 'react'
import { FormProvider } from 'react-hook-form'
import { MarkdownContext } from './providers/MarkdownProvider'
import { TrialsContext } from './providers/TrialsProvider'
import Issue from './modules/Issue'
import Trials from './modules/Trials'
import StartButton from './elements/StartButton'
import EditorFooter from './elements/EditorFooter'

export default function Editor(props) {

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
      <section className={'section'}>
        <FormProvider {...props.methods}>
          <Issue/>
        </FormProvider>
      </section>
      <Trials addTrial={addTrial}/>
      <section className={'section'}>
        <hr/>
        <StartButton start={props.stopwatch.start} addTrial={addTrial}/>
        <EditorFooter pause={props.stopwatch.pause}/>
      </section>
    </>
  )
}
