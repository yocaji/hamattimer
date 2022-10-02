import { FormProvider, useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { MarkdownContext } from '../providers/MarkdownProvider'
import { TrialsContext } from '../providers/TrialsProvider'
import MarkdownArea from '../molecules/MarkdownArea'
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

  const updateTrials = (id) => {
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
          <form onChange={() => updateTrials(trial.id)}>
            <div className={'field'}>
              <label className={'label'}>考えたこと・調べたこと</label>
              <div className={'control'}>
                <MarkdownArea
                  name={'guess'}
                  rows={4}
                  placeholder={`- □□が△△かもしれない\n- 参考にした記事\n  - https://example.com`}
                  updateValue={() => updateTrials(trial.id)}
                />
              </div>
            </div>
            <div className={'field'}>
              <label className={'label'}>やったこと</label>
              <div className={'control'}>
                <MarkdownArea
                  name={'operation'}
                  rows={6}
                  placeholder={`以下のコマンドを実行した\n\`\`\`\nnpm i ******\n\`\`\``}
                  updateValue={() => updateTrials(trial.id)}
                />
              </div>
            </div>
            <div className={'field'}>
              <label className={'label'}>やった結果</label>
              <div className={'control'}>
                <MarkdownArea
                  name={'result'}
                  rows={6}
                  placeholder={'コマンドの実行結果のログ、スクリーンショットなど'}
                  updateValue={() => updateTrials(trial.id)}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  )
}
