import { useSession, signIn, signOut } from "next-auth/react"
import { Octokit } from "octokit"

export default function LoginBtn() {
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
