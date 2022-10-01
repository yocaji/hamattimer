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
      <div className={'modal-card'}>
        <header className={'modal-card-head'}>
          <h1 className={'modal-card-title is-size-5'}>リセットしますか？</h1>
          <button className={'delete'} onClick={() => props.setIsOpen(false)}/>
        </header>
        <section className={'modal-card-body'}>
          <div className={'content'}>
            <p className={'lh-1'}>以下の項目を消去して初期状態に戻します。</p>
            <ul>
              <li>「解決したいこと」に入力した内容</li>
              <li>「試したこと」入力した内容</li>
              <li>生成されたMarkdownデータ</li>
              <li>経過時間</li>
              <li>リマインドする時間</li>
            </ul>
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
      </div>
    </div>
  )
}
