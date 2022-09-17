import { useContext } from 'react'
import { FormProvider } from 'react-hook-form'
import { MarkdownContext } from './providers/MarkdownProvider'
import { TrialsContext } from './providers/TrialsProvider'
import Issue from './Issue'
import Trials from './Trials'
import StartBtn from './StartBtn'
import EditorFooter from './EditorFooter'

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
        <StartBtn start={props.stopwatch.start} addTrial={addTrial}/>
      </section>
      <Trials addTrial={addTrial}/>
      <section className={'section'}>
        <hr/>
        <EditorFooter pause={props.stopwatch.pause}/>
      </section>
    </>
  )
}
