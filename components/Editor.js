import { useContext } from 'react'
import { Octokit } from 'octokit'
import { MarkdownContext } from './providers/MarkdownProvider'

export default function Editor(props) {
  const { markdown, setMarkdown } = useContext(MarkdownContext)

  const uploadImage = async (event) => {
    const pasteData = event.clipboardData.items[0]
    if (!pasteData.type.match('image.*')) return

    const pos = event.target.selectionEnd
    const length = markdown.length
    const frontText = markdown.substring(0, pos)
    const rearText = markdown.substring(pos, length)

    const item = event.clipboardData.items[0].getAsFile()
    console.log(item)
    const buffer = await item.arrayBuffer()
    const content = Buffer.from(buffer, 'binary').toString('base64')
    const octokit = new Octokit({ auth: props.session.accessToken })
    octokit.rest.repos
      .createOrUpdateFileContents({
        owner: props.session.user.name,
        repo: 'playground',
        path: `hamattimer/${item.lastModified}-${item.name}`,
        message: 'Uploaded by Hamattimer',
        content: content,
      })
      .then((res) => {
        const imageMd = `![${res.data.content.name}](${res.data.content.download_url})`
        setMarkdown(frontText + imageMd + rearText)
      })
  }

  const setData = (e) => {
    e.preventDefault()
    setMarkdown(e.target.value)
  }

  return (
    <textarea
      placeholder="Markdownで記述"
      value={markdown}
      onPaste={uploadImage}
      onChange={setData}
      className="textarea"
    />
  )
}
