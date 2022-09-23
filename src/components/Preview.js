import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import { MarkdownContext } from './providers/MarkdownProvider'
import ExportButtons from './modules/ExportButtons'

export default function Preview() {

  const { markdown, updateMarkdown } = useContext(MarkdownContext)

  useEffect(() => {
    updateMarkdown()
  })

  return (
      <div>
        <div className={'card-content'}>
          <ExportButtons/>
        </div>
        <div className={'card-footer'}/>
        <div className={'card-content content'}>
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} unwrapDisallowed={false}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
  )
}
