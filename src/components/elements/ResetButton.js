import { useState } from 'react'
import { MdCleaningServices } from 'react-icons/md'
import ResetModal from './ResetModal'

export default function ResetButton(props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={'navbar-end'}>
      <div className={'navbar-item'}>
        <button onClick={() => setIsOpen(true)} className={'button is-rounded is-primary is-outlined'}>
          <MdCleaningServices/><span className={'is-hidden-touch ml-1'}>リセット</span>
        </button>
      </div>
      <ResetModal isOpen={isOpen} setIsOpen={setIsOpen} stopwatch={props.stopwatch}/>
    </div>
  )
}
