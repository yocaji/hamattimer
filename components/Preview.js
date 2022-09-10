import { useContext } from 'react'
import { MarkdownContext } from './providers/MarkdownProvider'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export default function MarkdownPreview() {
  const { markdown } = useContext(MarkdownContext)
  return (
    <section className={'section'}>
      <p className={'is-size-7'}>Preview</p>
      <ReactMarkdown plugins={[gfm]} unwrapDisallowed={false}>
        {markdown}
      </ReactMarkdown>
    </section>
  )
}
