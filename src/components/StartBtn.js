import { useContext } from 'react'
import { TrialsContext } from './providers/TrialsProvider'

export default function StartBtn(props) {

  const { trials } = useContext(TrialsContext)
  if (trials.length) return

  const handleClick = () => {
    props.start()
    props.addTrial()
  }

  return (
    <div className={'has-text-centered mt-6'}>
      <button type={'button'} className={'button is-dark'} onClick={handleClick}>
        スタート
      </button>
    </div>
  )
}
