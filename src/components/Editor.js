import { useContext } from 'react'
import { FormProvider } from 'react-hook-form'
import { MarkdownContext } from './providers/MarkdownProvider'
import { TrialsContext } from './providers/TrialsProvider'
import Issue from '../components/Issue'
import Trials from '../components/Trials'
import StartBtn from '../components/StartBtn'

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
        <StartBtn start={props.start} addTrial={addTrial}/>
      </section>
      <Trials pause={props.pause} addTrial={addTrial}/>
    </>
  )
}
