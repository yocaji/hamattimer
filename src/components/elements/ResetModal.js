import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { IsStartedContext } from '../providers/IsStartedProvider'
import { TrialsContext } from '../providers/TrialsProvider'

export default function ResetModal(props) {

  const { setIsStarted } = useContext(IsStartedContext)
  const { setTrials } = useContext(TrialsContext)

  const {
    getValues,
    reset,
  } = useFormContext()

  const resetAll = () => {
    reset()
    props.stopwatch.reset(0, false)
    setIsStarted(false)
    setTrials([])
    localStorage.setItem('issue', JSON.stringify(getValues()))
    localStorage.setItem('trials', JSON.stringify([]))
  }
  const isActive = () => props.isOpen ? 'is-active' : ''

  return (
    <div className={`modal ${isActive()}`}>
      <div className={'modal-background'} onClick={() => props.setIsOpen(false)}/>
      <div className={'modal-content'}>
        <div className={'box'}>
          <p className={'mb-2'}>データをリセットしますか？</p>
          <div className={'buttons'}>
            <button className={'button is-danger'} onClick={() => {
              resetAll()
              props.setIsOpen(false)
            }}>リセットする
            </button>
            <button className={'button'} onClick={() => props.setIsOpen(false)}>閉じる</button>
          </div>
        </div>
      </div>
    </div>
  )
}
