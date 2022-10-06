import { useSession, signIn } from 'next-auth/react'
import ButtonGist from '../molecules/ButtonGist'
import ButtonCopy from '../molecules/ButtonCopy'

export default function PreviewHead() {

  const { status } = useSession()

  return (
    <>
      {status === 'unauthenticated' &&
        <div className={'is-size-7 has-text-right mb-2'}>
          <a onClick={() => signIn('github')}>GitHubと連携</a>するとGistに保存する機能をご利用になれます
        </div>
      }
      <div className={'buttons is-right'}>
        <ButtonCopy/>
        <ButtonGist/>
      </div>
    </>
  )
}
