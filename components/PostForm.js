import { useState } from 'react'
import { Octokit } from 'octokit'
import PostPreview from './PostPreview'

export default function PostForm(props) {
  const [markdown, setMarkdown] = useState()

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
        console.log(markdown)
      })
  }

  const uploadFile = async () => {
    const content = Buffer.from(markdown).toString('base64')
    const octokit = new Octokit({ auth: props.session.accessToken })
    octokit.rest.repos
      .createOrUpdateFileContents({
        owner: props.session.user.name,
        repo: 'playground',
        path: `hamattimer/${Date.now()}.md`,
        message: 'Uploaded by Hamattimer',
        content: content,
      })
      .then()
  }

  const setData = (e) => {
    e.preventDefault()
    setMarkdown(e.target.value)
  }

  return (
    <div className="columns">
      <div className="column">
        <textarea
          placeholder="Markdownで記述"
          value={markdown}
          onPaste={uploadImage}
          onChange={setData}
          className="textarea"
        />
        <button onClick={uploadFile} className="button mt-3">
          Export md
        </button>
      </div>
      <div className="column content">
        <PostPreview markdown={markdown} />
      </div>
    </div>
  )
}
