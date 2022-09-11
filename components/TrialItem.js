import { MdDelete } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

export default function TrialItem(props) {
  const { register, setValue, getValues } = useForm({ mode: 'all' })

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
    const newTrials = [
      ...currentTrials.slice(0, id - 1),
      {
        id: props.trial.id,
        guess: getValues('guess'),
        operation: getValues('operation'),
        result: getValues('result'),
      },
      ...currentTrials.slice(id, currentTrials.length),
    ]
    localStorage.setItem('trials', JSON.stringify(newTrials))
    props.preview()
  }

  return (
    <section className={'section'}>
      <div className={'box'}>
        <h2 className={'title is-5'}>
          試したこと{props.trial.id}
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
              <textarea
                {...register('guess')}
                className={'textarea'}
                defaultValue={props.trial.guess}
              />
            </div>
          </div>
          <div className={'field'}>
            <label className={'label'}>やったこと</label>
            <div className={'control'}>
              <textarea
                {...register('operation')}
                className={'textarea'}
                defaultValue={props.trial.operation}
              />
            </div>
          </div>
          <div className={'field'}>
            <label className={'label'}>結果</label>
            <div className={'control'}>
              <textarea
                {...register('result')}
                className={'textarea'}
                defaultValue={props.trial.result}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
