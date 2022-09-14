import { useFormContext } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { MarkdownContext } from './providers/MarkdownProvider'
import MarkdownArea from './MarkdownArea'
import { MdDelete } from 'react-icons/md'

export default function Trial(props) {

  const { updateMarkdown } = useContext(MarkdownContext)

  const methods = useFormContext()
  const { setValue, getValues } = methods

  useEffect(() => {
    const defaultValue = JSON.parse(localStorage.getItem('trials'))[
      props.trial.id - 1
    ]
    setValue('guess', defaultValue?.guess)
    setValue('operation', defaultValue?.operation)
    setValue('result', defaultValue?.result)
  }, [props.trial, setValue])

  const change = (id) => {
    const currentTrials = JSON.parse(localStorage.getItem('trials'))
    const removedTrials = currentTrials.filter((trial) => {
      return trial.id !== id
    })
    const newTrials = [
      ...removedTrials,
      {
        id: props.trial.id,
        guess: getValues('guess') ?? '',
        operation: getValues('operation') ?? '',
        result: getValues('result') ?? '',
      },
    ]
    localStorage.setItem('trials', JSON.stringify(newTrials))
    updateMarkdown()
  }

  return (
    <section className={'section'}>
      <div className={'box'}>
        <h2 className={'title is-5'}>
          試したこと{props.index}
          <button
            className={'button is-light is-small ml-3'}
            onClick={() => props.remove()}
          >
            <MdDelete />
          </button>
        </h2>
          <form onChange={() => change(props.trial.id)}>
            <div className={'field'}>
              <label className={'label'}>考えたことや調べたこと</label>
              <div className={'control'}>
                <MarkdownArea name={'guess'} value={props.trial.guess} />
              </div>
            </div>
            <div className={'field'}>
              <label className={'label'}>やったこと</label>
              <div className={'control'}>
                <MarkdownArea
                  name={'operation'}
                  value={props.trial.operation}
                />
              </div>
            </div>
            <div className={'field'}>
              <label className={'label'}>結果</label>
              <div className={'control'}>
                <MarkdownArea name={'result'} value={props.trial.result} />
              </div>
            </div>
          </form>
      </div>
    </section>
  )
}
