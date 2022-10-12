import { useEffect } from 'react'

export default function TimerCounter({ seconds, minutes, hours }) {

  const pad0 = (number) => {
    return number.toString().padStart(2, '0')
  }

  useEffect(() => {
    localStorage.setItem(
      'countdown', JSON.stringify({ seconds, minutes, hours })
    )
  }, [hours, minutes, seconds])

  return (
    <>
      <div className={'is-size-3 is-family-monospace mr-3'} data-testid={'stopwatch-counter'}>
        {hours}:{pad0(minutes)}<span className={'is-size-6 ml-1'}>{pad0(seconds)}</span>
      </div>
    </>
  )
}
