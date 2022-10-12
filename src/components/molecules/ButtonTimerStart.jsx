import { useContext } from 'react'
import { format } from 'date-fns'
import { IsStartedContext } from '../providers/IsStartedProvider'
import Button from '../atoms/Button'

export default function ButtonTimerStart({ restart }) {

  const { setIsStarted } = useContext(IsStartedContext)

  const handleClick = () => {
    const expired = localStorage.getItem('expired')
    const time = new Date()
    time.setSeconds(time.getSeconds() + expired * 60)
    restart(time)
    const timestamp = format(Date.now(), 'yyyy年M月d日HH時mm分開始')
    localStorage.setItem('started_at', timestamp)
    setIsStarted(true)
  }

  return (
    <Button onClick={handleClick} classNames={'is-primary is-light ml-2'}>
      スタート
    </Button>
  )
}
