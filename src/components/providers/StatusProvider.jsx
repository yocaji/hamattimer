import { createContext, useEffect, useState } from 'react'

export const StatusContext = createContext({})

export const StatusProvider = (props) => {
  const statuses = { default: 0, working: 1, interval: 2, solved: 3 }
  const { children } = props
  const [status, setStatus] = useState(statuses.default)

  useEffect(() => {
    const started_at = localStorage.getItem('started_at')
    if (!started_at) return
    setStatus(statuses.working)

    const timer = JSON.parse(localStorage.getItem('timer'))
    if (timer.seconds + timer.minutes + timer.hours !== 0) return
    setStatus(statuses.interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StatusContext.Provider value={{ status, setStatus, statuses }}>
      {children}
    </StatusContext.Provider>
  )
}
