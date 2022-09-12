import { useEffect, useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { MarkdownContext } from './providers/MarkdownProvider'
import MarkdownArea from './MarkdownArea'

export default function Issue(props) {
  const { updateMarkdown } = useContext(MarkdownContext)

  const methods = useForm({
    mode: 'onBlur',
  })
  const {
    register,
    setValue,
    formState: { errors },
  } = methods

  useEffect(() => {
    if (!localStorage.getItem('issue')) {
      localStorage.setItem(
        'issue',
        `{"tobe": "", "asis": "", "problem": "", "limit": 30}`
      )
    }
  }, [])
  useEffect(() => {
    const defaultValue = JSON.parse(localStorage.getItem('issue'))
    setValue('tobe', defaultValue?.tobe || '')
    setValue('asis', defaultValue?.asis)
    setValue('problem', defaultValue?.problem)
    setValue('limit', defaultValue?.limit)
  }, [setValue])

  const change = (formData) => {
    localStorage.setItem('issue', JSON.stringify(formData))
    updateMarkdown()
  }

  return (
    <section className={'section'}>
      <div className={'box'}>
        <h2 className={'title is-5'}>解決したいこと</h2>
        <FormProvider {...methods}>
          <form onChange={methods.handleSubmit(change)}>
            <div className={'field'}>
              <label className={'label'}>期待する結果</label>
              <div className={'control'}>
                <input {...register('tobe')} className={'input'} />
              </div>
            </div>
            <div className={'field'}>
              <label className={'label'}>実際の結果</label>
              <div className={'control'}>
                <input {...register('asis')} className={'input'} />
              </div>
            </div>
            <div className={'field'}>
              <label className={'label'}>エラーメッセージやログなど</label>
              <div className={'control'}>
                <MarkdownArea name={'problem'} />
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
            </div>
            <p className={'help is-danger'}>{errors.limit?.message}</p>
            <button type={'button'} className={'button'} onClick={props.start}>
              スタート
            </button>
          </form>
        </FormProvider>
      </div>
    </section>
  )
}
