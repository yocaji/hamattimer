import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function GitHubIcon() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="dropdown is-hoverable is-right">
        <div className="navbar-item dropdown-trigger">
          <figure
            className="image is-32x32"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <Image
              src={session.user.image}
              alt={session.user.name}
              layout={'fill'}
              className="is-rounded"
            />
          </figure>
        </div>
        <div className="dropdown-menu mr-2" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <p>{session.user.email}</p>
            </div>
            <hr className="dropdown-divider" />
            <div className="dropdown-item has-text-centered">
              <button onClick={() => signOut()} className="button">
                GitHub連携解除
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
