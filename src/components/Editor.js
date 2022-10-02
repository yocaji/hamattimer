import { useContext } from 'react'
import { FormProvider } from 'react-hook-form'
import { IsStartedContext } from './providers/IsStartedProvider'
import { MarkdownContext } from './providers/MarkdownProvider'
import { TrialsContext } from './providers/TrialsProvider'
import Issue from './modules/Issue'
import Trials from './modules/Trials'
import ButtonStart from './molecules/ButtonStart'
import ButtonSolved from './molecules/ButtonSolved'
import ButtonStop from './molecules/ButtonStop'

export default function Editor(props) {

  const { isStarted, setIsStarted } = useContext(IsStartedContext)
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
        {!isStarted &&
          <ButtonStart start={props.stopwatch.start} addTrial={addTrial} setIsStarted={setIsStarted}/>
        }
        {isStarted &&
          <div className={'columns'}>
            <div className={'column'}>
              <ButtonSolved pause={props.stopwatch.pause}/>
            </div>
            <div className={'column'}>
              <ButtonStop pause={props.stopwatch.pause}/>
            </div>
          </div>
        }
      </div>
    </>
  )
}
