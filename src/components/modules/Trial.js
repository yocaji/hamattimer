import { FormProvider, useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { MarkdownContext } from '../providers/MarkdownProvider'
import { TrialsContext } from '../providers/TrialsProvider'
import MarkdownArea from '../elements/MarkdownArea'
import { MdDelete } from 'react-icons/md'

export default function Trial(props) {

  const trial = props.trial

  const { updateMarkdown } = useContext(MarkdownContext)
  const { trials, setTrials } = useContext(TrialsContext)

  const methods = useForm(
    { mode: 'onBlur' },
  )
  const { setValue, getValues } = methods

  useEffect(() => {
    setValue('guess', trial.guess)
    setValue('operation', trial.operation)
    setValue('result', trial.result)
  }, [trial, setValue])

  const change = (id) => {
    const newTrial = {
      id: trial.id,
      guess: getValues('guess') ?? '',
      operation: getValues('operation') ?? '',
      result: getValues('result') ?? '',
    }
    const currentTrials = JSON.parse(localStorage.getItem('trials'))
    const removedTrials = currentTrials.filter((trial) => {
      return trial.id !== id
    })
    const newTrials = [
      ...removedTrials,
      newTrial,
    ]
    setTrials(newTrials)
    localStorage.setItem('trials', JSON.stringify(newTrials))
    updateMarkdown()
  }

  const removeTrial = (id) => {
    const newTrials = trials.filter((trial) => {
      return trial.id !== id
    })
    setTrials(newTrials)
    localStorage.setItem('trials', JSON.stringify(newTrials))
    updateMarkdown()
  }

  return (
    <>
      <div className={'card-content has-border-sand-bottom'}>
        <div className={'columns is-vcentered'}>
          <div className={'column'}>
            <div className={'is-size-5 has-text-weight-bold'}>
              その{props.index}
            </div>
          </div>
          <div className={'column has-text-right'}>
            <button
              className={'button is-small is-rounded is-danger is-outlined'}
              onClick={() => removeTrial(trial.id)}
            >
              <MdDelete/>削除
            </button>
          </div>
        </div>
        <FormProvider {...methods}>
          <form onChange={() => change(trial.id)}>
            <div className={'field'}>
              <label className={'label'}>考えたことや調べたこと</label>
              <div className={'control'}>
                <MarkdownArea
                  name={'guess'}
                  value={trial.guess}
                  update={() => change(trial.id)}
                />
              </div>
            </div>
            <div className={'field'}>
              <label className={'label'}>やったこと</label>
              <div className={'control'}>
                <MarkdownArea
                  name={'operation'}
                  value={props.trial.operation}
                  update={() => change(trial.id)}
                />
              </div>
            </div>
            <div className={'field'}>
              <label className={'label'}>結果</label>
              <div className={'control'}>
                <MarkdownArea name={'result'} value={trial.result} update={() => change(trial.id)}/>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  )
}
