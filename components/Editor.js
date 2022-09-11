import { useContext } from 'react'
import { MarkdownContext } from './providers/MarkdownProvider'
import { db } from '../lib/db'

export default function Editor(props) {
  const { markdown, setMarkdown } = useContext(MarkdownContext)

  //   const item = event.clipboardData.items[0].getAsFile()
  //   const buffer = await item.arrayBuffer()
  //   const content = Buffer.from(buffer, 'binary').toString('base64')
  //   const octokit = new Octokit({ auth: props.session.accessToken })
  //   octokit.rest.repos
  //     .createOrUpdateFileContents({
  //       owner: props.session.user.name,
  //       repo: 'playground',
  //       path: `hamattimer/${item.lastModified}-${item.name}`,
  //       message: 'Uploaded by Hamattimer',
  //       content: content,
  //     })
  //     .then((res) => {
  //       const imageMd = `![${res.data.content.name}](${res.data.content.download_url})`
  //       setMarkdown(frontText + imageMd + rearText)
  //     })
  // }

  const saveImage = async (e) => {
    const pasteData = e.clipboardData.items[0]
    if (!pasteData.type.match('image.*')) return

    return await db.screenshots.add({
      data: pasteData.getAsFile(),
    })
  }
  const insertImage = async (e) => {
    const id = await saveImage(e)
    const screenshot = await db.screenshots.get(id)
    const blobUrl = URL.createObjectURL(screenshot.data)

    const cursorPosition = e.target.selectionEnd
    const textLength = markdown.length
    const beforeCursor = markdown.substring(0, cursorPosition)
    const afterCursor = markdown.substring(cursorPosition, textLength)
    const name = `${screenshot.data.lastModified}-${screenshot.data.name}`
    const imageSyntax = `![${name}](${blobUrl})`
    setMarkdown(beforeCursor + imageSyntax + afterCursor)
  }

  const setData = (e) => {
    e.preventDefault()
    setMarkdown(e.target.value)
  }

  return (
    <section className={'section'}>
      <textarea
        placeholder={'Markdownで記述'}
        value={markdown}
        onPaste={insertImage}
        onChange={setData}
        className={'textarea'}
      />
    </section>
  )
}
