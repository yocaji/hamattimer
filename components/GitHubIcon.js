import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { GoMarkGithub } from 'react-icons/go'

export default function GitHubIcon() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div className={'navbar-item is-hoverable'}>
          <figure className={'image is-32x32'}>
            <Image
              src={session.user.image}
              alt={session.user.name}
              layout={'fill'}
              className={'is-rounded'}
            />
          </figure>
          <div className={'navbar-dropdown is-right'}>
            <div className={'navbar-item'}>
              <p>{session.user.email}</p>
            </div>
            <hr className={'navbar-divider'} />
            <div className={'navbar-item'}>
              <button onClick={() => signOut()} className={'button'}>
                GitHub連携解除
              </button>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className={'navbar-item'}>
        <button onClick={() => signIn()} className={'button'}>
          <GoMarkGithub className={'mr-2'} />
          GitHub連携
        </button>
      </div>
    )
  }
}
