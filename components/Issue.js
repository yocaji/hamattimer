import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { db } from './db'

export default function Issue() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'all',
  })
  const submit = (formData) => {
    localStorage.setItem('issue', JSON.stringify(formData))
  }
  useEffect(() => {
    const defaultValue = JSON.parse(localStorage.getItem('issue'))
    setValue('tobe', defaultValue?.tobe)
    setValue('asis', defaultValue?.asis)
    setValue('problem', defaultValue?.problem)
    setValue('limit', defaultValue?.limit)
  }, [setValue])

  const insertImage = async (e) => {
    const id = await saveImage(e)
    const screenshot = await db.screenshots.get(id)
    const blobUrl = URL.createObjectURL(screenshot.data)

    const cursorPosition = e.target.selectionEnd
    const value = getValues('problem')
    const textLength = value.length
    const beforeCursor = value.substring(0, cursorPosition)
    const afterCursor = value.substring(cursorPosition, textLength)
    const name = `${screenshot.data.lastModified}-${screenshot.data.name}`
    const imageSyntax = `![${name}](${blobUrl})`
    setValue('problem', beforeCursor + imageSyntax + afterCursor)
  }
  const saveImage = async (e) => {
    const pasteData = e.clipboardData.items[0]
    if (!pasteData.type.match('image.*')) return

    return await db.screenshots.add({
      data: pasteData.getAsFile(),
    })
  }

  return (
    <section className={'section'}>
      <h2 className={'title is-5'}>解決したいこと</h2>
      <form onSubmit={handleSubmit(submit)}>
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
            <textarea
              {...register('problem')}
              onPaste={insertImage}
              className={'textarea'}
            />
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
        <button type={'submit'} className={'button'}>
          スタート
        </button>
      </form>
    </section>
  )
}
