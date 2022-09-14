import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { db } from '../utils/db'
import { MarkdownContext } from './providers/MarkdownProvider'
import { TrialsContext } from './providers/TrialsProvider'
import { MdDelete } from 'react-icons/md'

export default function DeleteBtn() {

  const { updateMarkdown } = useContext(MarkdownContext)
  const { setTrials } = useContext(TrialsContext)

  const {
    getValues,
    reset,
    handleSubmit,
  } = useFormContext()

  const resetAll = () => {
    confirm('データをリセットしますか？')
    setTrials([])
    reset()
    localStorage.setItem('issue', JSON.stringify(getValues()))
    localStorage.setItem('trials', JSON.stringify([]))
    updateMarkdown()
    db.screenshots.clear()
  }

  return (
    <form className={'navbar-item'}>
      <button onClick={handleSubmit(resetAll)} className={'button'}><MdDelete />リセット</button>
    </form>
  )
}
