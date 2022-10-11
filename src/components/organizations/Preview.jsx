import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import { MarkdownContext } from '../providers/MarkdownProvider'
import ButtonGist from '../molecules/ButtonGist'
import ButtonCopy from '../molecules/ButtonCopy'

export default function Preview() {

  const { markdown, updateMarkdown } = useContext(MarkdownContext)

  useEffect(() => {
    updateMarkdown()
  })

  return (
    <>
      <div className={'columns is-variable is-1 pt-2'}>
        <div className={'column is-6'}>
        </div>
        <div className={'column is-3'}>
          <ButtonCopy/>
        </div>
        <div className={'column is-3'}>
          <ButtonGist/>
        </div>
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
