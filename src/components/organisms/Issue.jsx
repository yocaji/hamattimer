import { useEffect, useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { MarkdownContext } from '../providers/MarkdownProvider'
import MarkdownArea from '../molecules/MarkdownArea'

export default function Issue() {

  const { updateMarkdown } = useContext(MarkdownContext)
  const { register, setValue, getValues } = useFormContext()

  useEffect(() => {
    if (!localStorage.getItem('issue')) {
      localStorage.setItem(
        'issue',
        `{"tobe": "", "asis": "", "problem": ""}`,
      )
    }
  }, [])

  useEffect(() => {
    const defaultValue = JSON.parse(localStorage.getItem('issue'))
    setValue('tobe', defaultValue?.tobe)
    setValue('asis', defaultValue?.asis)
    setValue('problem', defaultValue?.problem)
  }, [setValue])

  const updateIssue = () => {
    const formValues = getValues()
    const tobe = JSON.stringify(formValues.tobe)
    const asis = JSON.stringify(formValues.asis)
    const problem = JSON.stringify(formValues.problem)
    localStorage.setItem('issue',
      `{"tobe": ${tobe}, "asis": ${asis}, "problem": ${problem}}`,
    )
    updateMarkdown()
  }

  return (
    <div data-testid={'issue'}>
      <h2 className={'title is-5 mt-4'}>解決したいこと</h2>
      <div className={'box'} data-testid={'issue'}>
        <form onChange={updateIssue} autoComplete={'off'}>
          <div className={'field'}>
            <label className={'label'}>期待する結果をひとことで</label>
            <div className={'control'}>
              <input {...register('tobe')} placeholder={'○○したら××が表示される'} className={'input'}/>
            </div>
          </div>
          <div className={'field'}>
            <label className={'label'}>実際の結果をひとことで</label>
            <div className={'control'}>
              <input {...register('asis')} placeholder={'○○しても画面の表示が変わらない'} className={'input'}/>
            </div>
          </div>
          <div className={'field'}>
            <label className={'label'}>詳しい状況</label>
            <div className={'control'}>
              <MarkdownArea
                name={'problem'}
                rows={12}
                placeholder={`エラーメッセージ、ログ、経緯など\n（スクリーンショットを貼り付けると自動でMarkdownのコードとして挿入されます）`}
                updateValue={updateIssue}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
