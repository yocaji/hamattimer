import { useContext, useState } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'
import Modal from '../elements/Modal'
import ModalStop from '../elements/ModalStop'

export default function EndButtons(props) {

  const { isStarted } = useContext(IsStartedContext)
  const [stopIsOpen, setStopIsOpen] = useState(false)

  if (!isStarted) return

  const handleClickStop = () => {
    props.pause()
    setStopIsOpen(true)
  }

  return (
    <>
      <div className={'columns'}>
        <div className={'column'}>
        </div>
        <div className={'column'}>
          <button className={'button is-rounded is-medium is-fullwidth is-primary is-outlined'} onClick={handleClickStop}>終了する</button>
        </div>
      </div>
      <Modal isOpen={stopIsOpen} setIsOpen={setStopIsOpen} title={'おつかれさまでした🍵'}>
        <ModalStop/>
      </Modal>
    </>
  )
}
