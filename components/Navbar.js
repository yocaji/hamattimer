import GitHubIcon from './GitHubIcon'
import ExportBtn from './ExportBtn'
import Timer from './Timer'

export default function Navbar() {
  return (
    <>
      <nav
        className={'navbar is-fixed-top has-shadow'}
        role={'navigation'}
        aria-label={'dropdown navigation'}
      >
        <div className={'navbar-brand'}>
          <h1 className={'navbar-item is-size-4 has-text-weight-bold'}>
            はまったいまー
          </h1>
        </div>
        <div className={'navbar-start'}>
          <Timer />
        </div>
        <div className={'navbar-end'}>
          <ExportBtn />
          <GitHubIcon />
        </div>
      </nav>
      <div className={'block py-3'}></div>
    </>
  )
}
