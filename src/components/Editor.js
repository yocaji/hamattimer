import { useContext } from 'react'
import { FormProvider } from 'react-hook-form'
import { IsStartedContext } from './providers/IsStartedProvider'
import { MarkdownContext } from './providers/MarkdownProvider'
import { TrialsContext } from './providers/TrialsProvider'
import Issue from './modules/Issue'
import Trials from './modules/Trials'
import StartButton from './elements/StartButton'
import EndButtons from './modules/EndButtons'
import ButtonSolved from './molecules/ButtonSolved'

export default function Editor(props) {

  const { isStarted } = useContext(IsStartedContext)
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
        {isStarted &&
          <div className={'columns'}>
            <div className={'column'}>
              <ButtonSolved pause={props.pause}/>
            </div>
            <div className={'column'}>
            </div>
          </div>
        }
        <EndButtons pause={props.stopwatch.pause}/>
      </div>
    </>
  )
}
