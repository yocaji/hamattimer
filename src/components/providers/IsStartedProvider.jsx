import { createContext, useState } from 'react'

export const IsStartedContext = createContext({})

export const IsStartedProvider = (props) => {
  const { children } = props
  const [isStarted, setIsStarted] = useState(false)

  return (
    <IsStartedContext.Provider value={{ isStarted, setIsStarted }}>
      {children}
    </IsStartedContext.Provider>
  )
}
