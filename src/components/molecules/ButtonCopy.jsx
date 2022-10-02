import { useContext } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MarkdownContext } from '../providers/MarkdownProvider'
import Button from '../atoms/Button'
import { MdContentCopy } from 'react-icons/md'

export default function ButtonCopy() {

  const { markdown } = useContext(MarkdownContext)

  return (
    <CopyToClipboard text={markdown}>
      <Button classNames={'is-small is-rounded is-primary is-outlined'}>
        <MdContentCopy className={'mr-1'}/>Markdown形式でコピー
      </Button>
    </CopyToClipboard>
  )
}
