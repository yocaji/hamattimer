import { createContext, useEffect, useState } from 'react'

export const IsStartedContext = createContext({})

export const IsStartedProvider = (props) => {
  const { children } = props
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    const started_at = localStorage.getItem('started_at')
    setIsStarted(!!started_at)
  }, [])

  return (
    <IsStartedContext.Provider value={{ isStarted, setIsStarted}}>
      {children}
    </IsStartedContext.Provider>
  )
}
