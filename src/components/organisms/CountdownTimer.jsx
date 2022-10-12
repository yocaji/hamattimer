import { useState, useEffect, useContext } from 'react'
import { useTimer } from 'react-timer-hook'
import { IsStartedContext } from '../providers/IsStartedProvider'
import TimerCounter from '../molecules/TimerCounter'
import SelectExpired from '../molecules/SelectExpired'
import ButtonTimerControl from '../molecules/ButtonTimerControl'
import ButtonTimerStart from '../molecules/ButtonTimerStart'
import Modal from '../atoms/Modal'

export default function CountdownTimer() {

  const { isStarted } = useContext(IsStartedContext)
  const [expired, setExpired] = useState(30)
  const [isOpen, setIsOpen] = useState(false)

  const timer = useTimer({ expiryTimestamp: Date.now(), onExpire: () => setIsOpen(true), autoStart: false })
  const { seconds, minutes, hours, restart, pause, resume, isRunning } = timer

  useEffect(() => {
    const localTimer = JSON.parse(localStorage.getItem('countdown'))
    if (!localTimer) return

    const { seconds, minutes, hours } = localTimer
    if (seconds + minutes + hours === 0 || isRunning) return

    const time = new Date()
    time.setSeconds(time.getSeconds() + seconds + minutes * 60 + hours * 60 * 60)
    restart(time, false)
  }, [])

  useEffect(() => {
    localStorage.setItem('expired', expired)
  }, [expired])

  if (isStarted) {
    return (
      <>
        <TimerCounter expired={expired}
                      seconds={seconds} minutes={minutes} hours={hours} pause={pause} isRunning={isRunning}/>
        <ButtonTimerControl pause={pause} resume={resume} isRunning={isRunning}/>
        {isOpen &&
          <Modal
            onCancel={() => setIsOpen(false)}
            title={'調子はどうですか？'}
          >
            <div className={'content'}>
              <p className={'lh-1'}>{expired}分経ちました🔔<br/>詰まっていたら違った切り口で取り組んでみるのも良さそうです。</p>
              <ul>
                <li>一旦やめて休憩する</li>
                <li>誰かに質問してみる</li>
                <li>別の実現方法はないか考えてみる</li>
              </ul>
            </div>
            <div className={'notification is-info is-light'}>
              <p className={'lh-1'}>時間を延長して再開したい場合は、タイマーで今より長い時間を選ぶと再開できます。</p>
            </div>
          </Modal>
        }
      </>
    )
  } else {
    return (
      <>
        <SelectExpired expired={expired} setExpired={setExpired}/>
        <ButtonTimerStart restart={restart}/>
      </>
    )
  }
}
