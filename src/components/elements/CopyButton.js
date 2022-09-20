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
      <button className={'button is-small'}><MdContentCopy className={'mr-1'}/>Copy</button>
    </CopyToClipboard>
  )
}
