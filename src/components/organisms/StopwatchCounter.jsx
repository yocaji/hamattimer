import { useEffect, useState } from 'react'
import Modal from '../atoms/Modal'

export default function StopwatchCounter({ limit, seconds, minutes, hours, days, pause, isRunning }) {

  const [isOpen, setIsOpen] = useState(false)

  const pad0 = (number) => {
    return number.toString().padStart(2, '0')
  }

  useEffect(() => {
    localStorage.setItem(
      'stopwatch', JSON.stringify({ seconds, minutes, hours, days })
    )
  }, [days, hours, minutes, seconds])

  useEffect(() => {
    if (!isRunning) return

    const totalMinutes = minutes + hours * 60 + days * 60 * 24
    if (limit === String(totalMinutes)) {
      pause()
      setIsOpen(true)
    }
  }, [days, hours, minutes, pause, isRunning, limit])

  return (
    <>
      <div className={'is-size-3 is-family-monospace mr-3'} data-test-id={'stopwatch-counter'}>
        {days * 24 + hours}:{pad0(minutes)}<span className={'is-size-6 ml-1'}>{pad0(seconds)}</span>
      </div>
      {isOpen &&
        <Modal
          onCancel={() => setIsOpen(false)}
          title={'調子はどうですか？'}
        >
          <div className={'content'}>
            <p className={'lh-1'}>{limit}分経ちました🔔<br/>詰まっていたら違った切り口で取り組んでみるのも良さそうです。</p>
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
}
