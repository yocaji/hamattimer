import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MarkdownContext } from './providers/MarkdownProvider'
import ExportBtn from './ExportBtn'
import { MdContentCopy } from 'react-icons/md'

export default function MarkdownPreview() {

  const { markdown, updateMarkdown } = useContext(MarkdownContext)

  useEffect(() => {
    updateMarkdown()
  })

  return (
    <section className={'section'}>
      <div className={'buttons is-right has-addons'}>
        <CopyToClipboard text={markdown}>
          <button className={'button'}><MdContentCopy className={'mr-1'}/>Copy</button>
        </CopyToClipboard>
        <ExportBtn/>
      </div>
      <hr/>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} unwrapDisallowed={false}>
        {markdown}
      </ReactMarkdown>
    </section>
  )
}
