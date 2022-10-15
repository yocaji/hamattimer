import { useContext, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import ButtonRemoveTrial from '../molecules/ButtonRemoveTrial'
import MarkdownArea from '../molecules/MarkdownArea'
import { MarkdownContext } from '../providers/MarkdownProvider'
import { TrialsContext } from '../providers/TrialsProvider'

export default function Trial({ trial, index }) {
  const { updateMarkdown } = useContext(MarkdownContext)
  const { trials, setTrials } = useContext(TrialsContext)

  const methods = useForm({ mode: 'onBlur' })
  const { setValue, getValues } = methods

  useEffect(() => {
    setValue('guess', trial.guess)
    setValue('operation', trial.operation)
    setValue('result', trial.result)
  }, [trial, setValue])

  useEffect(() => {
    localStorage.setItem('trials', JSON.stringify(trials))
    updateMarkdown()
  }, [trials, updateMarkdown])

  const updateTrials = () => {
    const newTrial = {
      id: trial.id,
      guess: getValues('guess') ?? '',
      operation: getValues('operation') ?? '',
      result: getValues('result') ?? '',
    }
    const currentTrials = JSON.parse(localStorage.getItem('trials'))
    currentTrials[index] = newTrial
    setTrials(currentTrials)
  }

  return (
    <div className={'box'}>
      <div className={'columns is-vcentered'}>
        <div className={'column'}>
          <h3 className={'is-size-5 has-text-weight-bold'}>その{index + 1}</h3>
        </div>
        <div className={'column'}>
          <ButtonRemoveTrial
            id={trial.id}
            index={index}
            trials={trials}
            setTrials={setTrials}
          />
        </div>
      </div>
      <FormProvider {...methods}>
        <form onChange={() => updateTrials()}>
          <div className={'field'}>
            <label className={'label'}>考えたこと・調べたこと</label>
            <div className={'control'}>
              <MarkdownArea
                name={'guess'}
                rows={4}
                placeholder={`- □□が△△かもしれない\n- 参考にした記事\n  - https://example.com`}
                updateValue={() => updateTrials()}
              />
            </div>
          </div>
          <div className={'field'}>
            <label className={'label'}>やったこと</label>
            <div className={'control'}>
              <MarkdownArea
                name={'operation'}
                rows={6}
                placeholder={`以下のコマンドを実行した\n\`\`\`\nnpm install ******\n\`\`\``}
                updateValue={() => updateTrials()}
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
                updateValue={() => updateTrials()}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
