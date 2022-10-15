import { MdPause, MdPlayArrow } from 'react-icons/md'
import Button from '../atoms/Button'

export default function ButtonTimerControl({ pause, resume, isRunning }) {
  const handleClick = () => {
    isRunning ? pause() : resume()
  }
  const label = isRunning ? <MdPause /> : <MdPlayArrow />

  return (
    <Button onClick={handleClick} classNames={'is-primary is-light ml-2'}>
      {label}
    </Button>
  )
}
