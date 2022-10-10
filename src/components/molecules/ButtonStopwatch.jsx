import { format } from 'date-fns'
import { MdPause, MdPlayArrow } from 'react-icons/md'
import Button from '../atoms/Button'

export default function ButtonStopwatch({ start, pause, isRunning }) {

  const handleClick = () => {
    isRunning ? pause() : start()
    if (isRunning) return

    const started_at = JSON.stringify(localStorage.getItem('started_at'))
    if (!started_at) return

    const timestamp = format(Date.now(), 'yyyy年M月d日HH時mm分開始')
    localStorage.setItem('started_at', timestamp)
  }
  const label = isRunning ? <MdPause/> : <MdPlayArrow/>

  return (
    <Button onClick={handleClick} classNames={'is-primary is-light ml-2'}>
      {label}
    </Button>
  )
}
