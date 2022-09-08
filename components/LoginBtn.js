import { signIn } from 'next-auth/react'

export default function LoginBtn() {
  return (
    <button onClick={() => signIn()} className="button">
      Sign in
    </button>
  )
}
