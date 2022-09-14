import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { db } from '../utils/db'
import { MarkdownContext } from './providers/MarkdownProvider'
import { MdDelete } from 'react-icons/md'

export default function DeleteBtn() {

  const { updateMarkdown } = useContext(MarkdownContext)

  const {
    getValues,
    reset,
    handleSubmit,
  } = useFormContext()

  const change = () => {
    localStorage.setItem('issue', JSON.stringify(getValues()))
    updateMarkdown()
  }

  const resetAll = () => {
    confirm('データをリセットしますか？')
    reset()
    change()
    db.screenshots.clear()
  }

  return (
    <form className={'navbar-item'}>
      <button onClick={handleSubmit(resetAll)} className={'button'}><MdDelete />リセット</button>
    </form>
  )
}
