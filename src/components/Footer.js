import { useSession, signOut } from 'next-auth/react'

export default function Footer() {

  const { data: session } = useSession()

  if (session) {
    return (
      <footer className={'footer'}>
        <div className={'content has-text-centered'}>
          <p className={'is-size-7'}>
            <a onClick={() => signOut()}>GitHub連携解除</a>
          </p>
        </div>
      </footer>
    )
  }
}
