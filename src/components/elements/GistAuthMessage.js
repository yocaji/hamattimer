import { useSession, signIn } from 'next-auth/react'

export default function GistAuthMessage() {

  const { status } = useSession()

  if (status === 'unauthenticated') {
    return (
      <div className={'is-size-7 has-text-right mb-2'}>
        <a onClick={() => signIn('github')}>GitHubと連携</a>するとGistに保存する機能をご利用になれます
      </div>
    )
  }
}
