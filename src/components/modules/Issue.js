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
        `{"tobe": "", "asis": "", "problem": "", "limit": 30}`,
      )
    }
  }, [])

  useEffect(() => {
    const defaultValue = JSON.parse(localStorage.getItem('issue'))
    setValue('tobe', defaultValue?.tobe)
    setValue('asis', defaultValue?.asis)
    setValue('problem', defaultValue?.problem)
    setValue('limit', defaultValue?.limit)
  }, [setValue])

  const change = () => {
    const formValues = getValues()
    const tobe = JSON.stringify(formValues.tobe)
    const asis = JSON.stringify(formValues.asis)
    const problem = JSON.stringify(formValues.problem)
    const limit = JSON.stringify(formValues.limit)
    localStorage.setItem('issue',
      `{"tobe": ${tobe}, "asis": ${asis}, "problem": ${problem}, "limit": ${limit}}`,
    )
    updateMarkdown()
  }

  return (
    <div className={'card'}>
      <div className={'card-content'}>
        <h2 className={'title is-5'}>解決したいこと</h2>
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
          <label className={'label'}>タイマー</label>
          <div className={'field has-addons'}>
            <div className={'control'}>
              <input
                type={'number'}
                {...register('limit', {
                  valueAsNumber: true,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '整数で入力してください',
                  },
                  min: {
                    value: 1,
                    message: '1以上の整数を入力してください',
                  },
                })}
                className={'input'}
              />
            </div>
            <div className={'control'}>
              <button className={'button is-static'}>分</button>
            </div>
            <p className={'help is-danger'}>{errors.limit?.message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}
