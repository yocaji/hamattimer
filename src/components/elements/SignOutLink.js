import { useSession, signOut } from 'next-auth/react'

export default function SignOutLink() {

  const { data: session } = useSession()

  if (session) {
    return (
      <a onClick={() => signOut()}>GitHub連携解除</a>
    )
  }
}
