import { useContext } from 'react'
import { MarkdownContext } from './providers/MarkdownProvider'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export default function MarkdownPreview() {
  const { markdown } = useContext(MarkdownContext)
  return (
    <div>
      <ReactMarkdown plugins={[gfm]} unwrapDisallowed={false}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
