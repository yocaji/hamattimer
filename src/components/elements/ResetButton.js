import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import ResetModal from './ResetModal'

export default function ResetButton(props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={'navbar-item'}>
        <button onClick={() => setIsOpen(true)} className={'button'}><MdDelete/>リセット</button>
      </div>
      <ResetModal isOpen={isOpen} setIsOpen={setIsOpen} stopwatch={props.stopwatch}/>
    </>
  )
}