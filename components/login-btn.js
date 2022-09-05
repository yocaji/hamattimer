import { useSession, signIn, signOut } from 'next-auth/react'
import { Octokit } from 'octokit'

export default function LoginBtn() {
  const uploadFile = async () => {
    const octokit = new Octokit({ auth: session.accessToken })
    octokit.rest.repos.createOrUpdateFileContents({
      owner: session.user.name,
      repo: 'hamattimer-proto',
      path: 'test-1.md',
      message: 'Uploaded by Hamattimer',
      content: 'IyMgUHVibGljCiFbaW1hZ2VdKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS95b2NhamlpL2ktbWFkZS10aGlzLXJlcG8tZnJvbS1hbi1hcGkvbWFpbi9pY29uNC5wbmcp',
    }).then((res) => {
      console.log(res.data)
    })
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
        <button onClick={() => uploadFile()}>Upload</button>
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
