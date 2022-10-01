import { useContext } from 'react'
import { FormProvider } from 'react-hook-form'
import { MarkdownContext } from './providers/MarkdownProvider'
import { TrialsContext } from './providers/TrialsProvider'
import Issue from './modules/Issue'
import Trials from './modules/Trials'
import StartButton from './elements/StartButton'
import EndButtons from './modules/EndButtons'

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
      <FormProvider {...props.methods}>
        <Issue/>
      </FormProvider>
      <Trials addTrial={addTrial}/>
      <div className={'mt-6'}>
        <StartButton start={props.stopwatch.start} addTrial={addTrial}/>
        <EndButtons pause={props.stopwatch.pause}/>
      </div>
    </>
  )
}
