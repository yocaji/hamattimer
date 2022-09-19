import { useSession, signIn } from 'next-auth/react'
import { GoMarkGithub } from 'react-icons/go'

export default function GitHubIcon() {

  const { data: session } = useSession()

  if (session) {
  } else {
    return (
      <div className={'navbar-item'}>
        <button onClick={() => signIn('github')} className={'button'}>
          <GoMarkGithub className={'mr-2'} />
          GitHub連携
        </button>
      </div>
    )
  }
}
