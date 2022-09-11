import { useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { db } from '../lib/db'
import { MarkdownContext } from './providers/MarkdownProvider'
import Textarea from './Textarea'

export default function Issue(props) {
  const { updateMarkdown } = useContext(MarkdownContext)
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'all',
  })

  useEffect(() => {
    const defaultValue = JSON.parse(localStorage.getItem('issue'))
    setValue('tobe', defaultValue?.tobe)
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
        <form onChange={handleSubmit(change)}>
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
              <Textarea name={'problem'} />
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
      </div>
    </section>
  )
}
