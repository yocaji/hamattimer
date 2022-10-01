import { useContext, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MarkdownContext } from '../providers/MarkdownProvider'
import { MdContentCopy } from 'react-icons/md'

export default function CopyButton() {

  const { markdown, updateMarkdown } = useContext(MarkdownContext)

  useEffect(() => {
    updateMarkdown()
  })

  return (
    <CopyToClipboard text={markdown}>
      <button className={'button is-small is-rounded is-primary is-outlined'}>
        <MdContentCopy className={'mr-1'}/>Markdown形式でコピー
      </button>
    </CopyToClipboard>
  )
}
