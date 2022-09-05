import { useSession, signIn, signOut } from 'next-auth/react'
import { Octokit } from 'octokit'
import { useState } from 'react'

export default function LoginBtn() {
  const [md, setMd] = useState('')

  const uploadImage = async (event) => {
    const pasteData = event.clipboardData.items[0]
    if (!pasteData.type.match('image.*')) return

    const pos = event.target.selectionEnd
    const length = md.length
    const frontText = md.substring(0, pos)
    const rearText = md.substring(pos, length)

    const item = event.clipboardData.items[0].getAsFile()
    console.log(item)
    const buffer = await item.arrayBuffer()
    const content = Buffer.from(buffer, 'binary').toString('base64')
    const octokit = new Octokit({ auth: session.accessToken })
    octokit.rest.repos.createOrUpdateFileContents({
      owner: session.user.name,
      repo: 'playground',
      path: `hamattimer/${item.lastModified}-${item.name}`,
      message: 'Uploaded by Hamattimer',
      content: content,
    }).then(res => {
      const imageMd = `![${res.data.content.name}](${res.data.content.download_url})`
      setMd(frontText + imageMd + rearText)
      console.log(md)
    })
  }

  const uploadFile = async () => {
    const content = Buffer.from(md).toString('base64')
    const octokit = new Octokit({ auth: session.accessToken })
    octokit.rest.repos.createOrUpdateFileContents({
      owner: session.user.name,
      repo: 'playground',
      path: `hamattimer/${Date.now()}.md`,
      message: 'Uploaded by Hamattimer',
      content: content,
    }).then()
  }

  const { data: session } = useSession()
  if (session) {
    const octokit = new Octokit({ auth: session.accessToken })
    octokit.rest.repos.listForAuthenticatedUser().then((res) => {
      console.log(res.data)
    })
    return (
      <>
        <p>
          Signed in as {session.user.email}&nbsp;&nbsp;
          <button onClick={() => signOut()}>Sign out</button>
        </p>
        <textarea value={md} onPaste={uploadImage} onChange={(e) => setMd(e.target.value)} rows={4} style={{ width: 360 }} /><br/>
        <button onClick={() => uploadFile()}>Export md</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
