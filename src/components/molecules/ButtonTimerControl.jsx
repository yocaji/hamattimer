import Button from '../atoms/Button'
import { MdPause, MdPlayArrow } from 'react-icons/md'

export default function ButtonTimerControl({ pause, resume, isRunning }) {

  const handleClick = () => {
    isRunning ? pause() : resume()
  }
  const label = isRunning ? <MdPause/> : <MdPlayArrow/>

  return (
    <Button onClick={handleClick} classNames={'is-primary is-light ml-2'}>
      {label}
    </Button>
  )
}
