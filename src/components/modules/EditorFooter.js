import { useContext, useState } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'
import SolvedModal from '../elements/SolvedModal'
import StoppedModal from '../elements/StoppedModal'

export default function EditorFooter(props) {

  const { isStarted } = useContext(IsStartedContext)
  const [solvedIsOpen, setSolvedIsOpen] = useState(false)
  const [stoppedIsOpen, setStoppedIsOpen] = useState(false)

  if (!isStarted) return

  const handleClickSolved = () => {
    props.pause()
    setSolvedIsOpen(true)
  }

  const handleClickStop = () => {
    props.pause()
    setStoppedIsOpen(true)
  }

  return (
    <>
      <div className={'columns'}>
        <div className={'column'}>
          <button className={'button is-dark is-fullwidth'} onClick={handleClickSolved}>解決した！</button>
        </div>
        <div className={'column'}>
          <button className={'button is-light is-fullwidth'} onClick={handleClickStop}>終了する</button>
        </div>
      </div>
      <SolvedModal isOpen={solvedIsOpen} setIsOpen={setSolvedIsOpen}/>
      <StoppedModal isOpen={stoppedIsOpen} setIsOpen={setStoppedIsOpen}/>
    </>
  )
}
