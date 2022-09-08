import { createContext, useState } from 'react'

export const MarkdownContext = createContext({})

export const MarkdownProvider = (props) => {
  const { children } = props
  const [markdown, setMarkdown] = useState()

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  )
}
