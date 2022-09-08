import { useSession, signIn } from 'next-auth/react'
import PostForm from './PostForm'

export default function LoginBtn() {
  const { data: session } = useSession()
  return (
    <>
      <hr />
      <section className="section column">
        <PostForm session={session} />
        <button onClick={() => signIn()} className="button">
          Sign in
        </button>
      </section>
    </>
  )
}
