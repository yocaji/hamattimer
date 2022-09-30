import { useSession, signOut } from 'next-auth/react'

export default function SignOutLink() {

  const { data: session } = useSession()

  if (session) {
    return (
      <a onClick={() => signOut()} className={'mx-3'}>GitHub連携解除</a>
    )
  }
}
