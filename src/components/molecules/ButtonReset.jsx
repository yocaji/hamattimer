import { useContext, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { MdCleaningServices } from 'react-icons/md'
import Button from '../atoms/Button'
import Modal from '../atoms/Modal'
import { StatusContext } from '../providers/StatusProvider'
import { TrialsContext } from '../providers/TrialsProvider'

export default function ButtonReset() {
  const { trials, setTrials } = useContext(TrialsContext)
  const { setStatus, statuses } = useContext(StatusContext)
  const { getValues, reset } = useFormContext()
  const [isOpen, setIsOpen] = useState(false)

  const resetAll = () => {
    reset()
    setTrials([{ id: Date.now(), guess: '', operation: '', result: '' }])
    setStatus(statuses.default)
    localStorage.setItem('issue', JSON.stringify(getValues()))
    localStorage.setItem('trials', JSON.stringify(trials))
    localStorage.setItem(
      'timer',
      JSON.stringify({ seconds: 0, minutes: 0, hours: 0 }),
    )
    localStorage.setItem('started_at', '')
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        classNames={
          'is-primary is-light has-text-weight-bold is-family-secondary'
        }
      >
        <MdCleaningServices />
        <span className={'ml-1'}>リセット</span>
      </Button>
      {isOpen && (
        <Modal
          title={'記録をリセットします'}
          confirmLabel={'リセットする'}
          cancelLabel={'やめる'}
          onCancel={() => setIsOpen(false)}
          onConfirm={() => resetAll()}
        >
          <div className={'content'}>
            <p className={'lh-1'}>記録した内容を消して初期状態に戻しますか？</p>
          </div>
          <div className={'notification is-info is-light mt-3'}>
            <p className={'lh-1'}>
              作成した記録をGistに保存しておくと、あとから必要になった時に見返すことができます
            </p>
          </div>
        </Modal>
      )}
    </>
  )
}
