import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import { MarkdownContext } from './providers/MarkdownProvider'
import ExportButtons from './modules/ExportButtons'

export default function MarkdownPreview() {

  const { markdown, updateMarkdown } = useContext(MarkdownContext)

  useEffect(() => {
    updateMarkdown()
  })

  return (
    <section className={'section'}>
      <ExportButtons/>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} unwrapDisallowed={false}>
        {markdown}
      </ReactMarkdown>
    </section>
  )
}
