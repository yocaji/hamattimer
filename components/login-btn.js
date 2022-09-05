import { useSession, signIn, signOut } from 'next-auth/react'
import { Octokit } from 'octokit'
import icon from '/public/icon.png'

export default function LoginBtn() {
  const uploadFile = async () => {
    const text = '## 見出し\n- 箇条書き'
    const content = Buffer.from(text).toString('base64')
    const octokit = new Octokit({ auth: session.accessToken })
    octokit.rest.repos.createOrUpdateFileContents({
      owner: session.user.name,
      repo: 'playground',
      path: 'hamattimer/test-1.md',
      message: 'Uploaded by Hamattimer',
      content: content,
    }).then()
  }

  const uploadImage = async () => {
    const res = await fetch(icon.src)
    const blob = await res.blob()
    const buffer = await blob.arrayBuffer()
    const content = Buffer.from(buffer, 'binary').toString('base64')
    const octokit = new Octokit({ auth: session.accessToken })
    octokit.rest.repos.createOrUpdateFileContents({
      owner: session.user.name,
      repo: 'playground',
      path: 'hamattimer/icon.png',
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
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <div>Access Token: {session.accessToken}</div>
        <button onClick={() => uploadFile()}>Upload md</button>
        <button onClick={() => uploadImage()}>Upload image</button>
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
