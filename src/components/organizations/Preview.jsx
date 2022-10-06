import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import { MarkdownContext } from '../providers/MarkdownProvider'
import PreviewHead from './PreviewHead'

export default function Preview() {

  const { markdown, updateMarkdown } = useContext(MarkdownContext)

  useEffect(() => {
    updateMarkdown()
  })

  return (
    <>
      <div className={'mt-2 mb-5'}>
        <PreviewHead/>
      </div>
      <div className={'tile is-child box'} id={'preview'}>
        <div className={'content'}>
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} unwrapDisallowed={false}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}
