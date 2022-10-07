import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Footer() {

  const { data: session } = useSession()

  return (
    <footer className={'footer has-text-centered'}>
      <div className={'is-size-6-half'}>
        <Link href={'/'}><a>トップページ</a></Link>
        {session &&
          <a onClick={() => signOut()} className={'mx-6'}>GitHub連携解除</a>
        }
      </div>
    </footer>
  )
}
