import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MarkdownContext } from './providers/MarkdownProvider'
import { MdContentCopy } from 'react-icons/md'

export default function MarkdownPreview() {

  const { markdown, updateMarkdown } = useContext(MarkdownContext)

  useEffect(() => {
    updateMarkdown()
  })

  return (
    <section className={'section'}>
      <div className={'column has-text-right'}>
        <CopyToClipboard text={markdown}>
          <button className={'button is-light'}><MdContentCopy/></button>
        </CopyToClipboard>
      </div>
      <hr/>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} unwrapDisallowed={false}>
        {markdown}
      </ReactMarkdown>
    </section>
  )
}
