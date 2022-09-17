import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { db } from '../utils/db'
import { TrialsContext } from './providers/TrialsProvider'
import { MdDelete } from 'react-icons/md'

export default function DeleteBtn(props) {

  const { setTrials } = useContext(TrialsContext)

  const {
    getValues,
    reset,
    handleSubmit,
  } = useFormContext()

  const resetAll = () => {
    confirm('データをリセットしますか？')
    reset()
    props.stopwatch.reset(0, false)
    setTrials([])
    localStorage.setItem('issue', JSON.stringify(getValues()))
    localStorage.setItem('trials', JSON.stringify([]))
    db.screenshots.clear()
  }

  return (
    <form className={'navbar-item'}>
      <button onClick={handleSubmit(resetAll)} className={'button'}><MdDelete />リセット</button>
    </form>
  )
}
