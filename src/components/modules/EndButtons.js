import { useContext, useState } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'
import Modal from '../elements/Modal'
import ModalSolved from '../elements/ModalSolved'
import ModalStop from '../elements/ModalStop'

export default function EndButtons(props) {

  const { isStarted } = useContext(IsStartedContext)
  const [solvedIsOpen, setSolvedIsOpen] = useState(false)
  const [stopIsOpen, setStopIsOpen] = useState(false)

  if (!isStarted) return

  const handleClickSolved = () => {
    props.pause()
    setSolvedIsOpen(true)
  }

  const handleClickStop = () => {
    props.pause()
    setStopIsOpen(true)
  }

  return (
    <>
      <div className={'columns'}>
        <div className={'column'}>
          <button className={'button is-primary is-rounded is-medium is-fullwidth'} onClick={handleClickSolved}>解決した！</button>
        </div>
        <div className={'column'}>
          <button className={'button is-rounded is-medium is-fullwidth is-primary is-outlined'} onClick={handleClickStop}>終了する</button>
        </div>
      </div>
      <Modal isOpen={solvedIsOpen} setIsOpen={setSolvedIsOpen} title={'おつかれさまでした🎉'}>
        <ModalSolved/>
      </Modal>
      <Modal isOpen={stopIsOpen} setIsOpen={setStopIsOpen} title={'おつかれさまでした🍵'}>
        <ModalStop/>
      </Modal>
    </>
  )
}
