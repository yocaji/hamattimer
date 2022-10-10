import Notification from '../atoms/Notification'
import { useContext, useEffect, useState } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'

export default function NotificationStart() {

  const { isStarted } = useContext(IsStartedContext)
  const [visible, setVisible] = useState(!isStarted)

  useEffect(() => {
    setVisible(!isStarted)
  }, [isStarted])

  return (
    <>
      {visible &&
        <Notification close={() => setVisible(false)} message={'用意ができたらタイマーをスタートしてください'}/>
      }
    </>
  )
}
