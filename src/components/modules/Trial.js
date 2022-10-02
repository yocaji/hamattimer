import { FormProvider, useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { MarkdownContext } from '../providers/MarkdownProvider'
import { TrialsContext } from '../providers/TrialsProvider'
import MarkdownArea from '../elements/MarkdownArea'
import ButtonRemoveTrial from '../molecules/ButtonRemoveTrial'

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

  return (
    <>
      <div className={'card-content has-border-sand-bottom'}>
        <div className={'columns is-vcentered'}>
          <div className={'column'}>
            <div className={'is-size-5 has-text-weight-bold'}>
              その{props.index}
            </div>
          </div>
          <div className={'column'}>
            <ButtonRemoveTrial id={trial.id} index={props.index} trials={trials} setTrials={setTrials}/>
          </div>
        </div>
        <FormProvider {...methods}>
          <form onChange={() => change(trial.id)}>
            <div className={'field'}>
              <label className={'label'}>考えたこと・調べたこと</label>
              <div className={'control'}>
                <MarkdownArea
                  name={'guess'}
                  value={trial.guess}
                  update={() => change(trial.id)}
                  rows={4}
                  placeholder={`- □□が△△かもしれない\n- 参考にした記事\n  - https://example.com`}
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
                  rows={6}
                  placeholder={`以下のコマンドを実行した\n\`\`\`\nnpm i ******\n\`\`\``}
                />
              </div>
            </div>
            <div className={'field'}>
              <label className={'label'}>やった結果</label>
              <div className={'control'}>
                <MarkdownArea
                  name={'result'}
                  value={trial.result}
                  update={() => change(trial.id)}
                  rows={6}
                  placeholder={'コマンドの実行結果のログ、スクリーンショットなど'}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  )
}
