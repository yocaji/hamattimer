import { useState } from 'react'
import { MdCleaningServices } from 'react-icons/md'
import Modal from './Modal'
import ModalReset from './ModalReset'

export default function ResetButton(props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={'navbar-end'}>
      <div className={'navbar-item'}>
        <button onClick={() => setIsOpen(true)} className={'button is-rounded is-primary is-outlined'}>
          <MdCleaningServices/><span className={'is-hidden-touch ml-1'}>リセット</span>
        </button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'記録をリセットします'}>
        <ModalReset stopwatch={props.stopwatch} setIsOpen={setIsOpen}/>
      </Modal>
    </div>
  )
}
