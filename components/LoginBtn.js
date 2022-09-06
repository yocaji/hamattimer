import { useSession, signIn, signOut } from 'next-auth/react'
import { Octokit } from 'octokit'
import PostForm from './PostForm'

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    const octokit = new Octokit({ auth: session.accessToken })
    octokit.rest.repos.listForAuthenticatedUser().then((res) => {
      console.log(res.data)
    })
    return (
      <>
        <section className="section">
          <img
            src={session.user.image}
            alt={session.user.name}
            className="image is-48x48"
          />
          <p>{session.user.email}</p>
          <button onClick={() => signOut()} className="button mt-3">
            Sign out
          </button>
        </section>
        <hr />
        <section className="section column">
          <PostForm session={session} />
        </section>
      </>
    )
  }
  return (
    <section className="section">
      Not signed in <br />
      <button onClick={() => signIn()} className="button">
        Sign in
      </button>
    </section>
  )
}
