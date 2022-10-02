import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { IsStartedContext } from '../providers/IsStartedProvider'
import { TrialsContext } from '../providers/TrialsProvider'

export default function ModalReset(props) {

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

  return (
    <>
      <section className={'modal-card-body'}>
        <div className={'content'}>
          <p className={'lh-1'}>記録した内容を消して初期状態に戻しますか？</p>
        </div>
        <div className={'notification is-info is-light mt-3'}>
          <p className={'lh-1'}>作成した記録をGistに保存しておくと、あとから必要になった時に見返すことができて便利です💡</p>
        </div>
      </section>
      <footer className={'modal-card-foot'}>
        <button className={'button is-danger'} onClick={() => {
          resetAll()
          props.setIsOpen(false)
        }}>リセットする
        </button>
        <button className={'button is-light'} onClick={() => props.setIsOpen(false)}>やめる
        </button>
      </footer>
    </>
  )
}
