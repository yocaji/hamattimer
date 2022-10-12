import { useContext, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { TrialsContext } from '../providers/TrialsProvider'
import { IsStartedContext } from '../providers/IsStartedProvider'
import Button from '../atoms/Button'
import Modal from '../atoms/Modal'
import { MdCleaningServices } from 'react-icons/md'

export default function ButtonReset({ resetStopwatch }) {

  const { trials, setTrials } = useContext(TrialsContext)
  const { setIsStarted } = useContext(IsStartedContext)
  const { getValues, reset } = useFormContext()
  const [isOpen, setIsOpen] = useState(false)

  const resetAll = () => {
    resetStopwatch()
    reset()
    setTrials([{ id: Date.now(), guess: '', operation: '', result: '' }])
    setIsStarted(false)
    localStorage.setItem('issue', JSON.stringify(getValues()))
    localStorage.setItem('trials', JSON.stringify(trials))
    localStorage.setItem('started_at', '')
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        classNames={'is-primary is-light has-text-weight-bold is-family-secondary'}
      >
        <MdCleaningServices/><span className={'ml-1'}>リセット</span>
      </Button>
      {isOpen &&
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
            <p className={'lh-1'}>作成した記録をGistに保存しておくと、あとから必要になった時に見返すことができます</p>
          </div>
        </Modal>
      }
    </>
  )
}
