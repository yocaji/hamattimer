import { useEffect, useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { MarkdownContext } from '../providers/MarkdownProvider'
import MarkdownArea from '../elements/MarkdownArea'

export default function Issue() {

  const { updateMarkdown } = useContext(MarkdownContext)

  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext()

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

  const change = () => {
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
    <div className={'card'} id={'issue'}>
      <div className={'card-header'}>
        <h2 className={'card-header-title'}>解決したいこと</h2>
      </div>
      <div className={'card-content'}>
        <form onChange={change}>
          <div className={'field'}>
            <label className={'label'}>期待する結果</label>
            <div className={'control'}>
              <input {...register('tobe')} className={'input'}/>
            </div>
          </div>
          <div className={'field'}>
            <label className={'label'}>実際の結果</label>
            <div className={'control'}>
              <input {...register('asis')} className={'input'}/>
            </div>
          </div>
          <div className={'field'}>
            <label className={'label'}>エラーメッセージやログなど</label>
            <div className={'control'}>
              <MarkdownArea name={'problem'} update={change}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
