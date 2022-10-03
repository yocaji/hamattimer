import { createContext, useState } from 'react'

export const TrialsContext = createContext({})

export const TrialsProvider = (props) => {
  const { children } = props
  const [trials, setTrials] = useState([])

  return (
    <TrialsContext.Provider value={{ trials, setTrials }}>
      {children}
    </TrialsContext.Provider>
  )
}
